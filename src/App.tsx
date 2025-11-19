import WeatherInfoCard from "./components/weather/WeatherInfoCard"
import SearchContainer from "./components/search/SearchContainer"
import AppHeader from "./components/common/AppHeader"
import HourlyForecastContainer from "./components/forecast/HourlyForecastContainer"
import WeatherDetailList from "./components/weather/WeatherDetailList"
import DailyForecastContainer from "./components/forecast/DailyForecastContainer"
import { fetchWeatherApi } from "openmeteo"
import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import dayjs from "dayjs"

type Location = {
  coordinate: [number, number]
  countryName: string,
  cityName: string
} | null

type UnitMap = {
  metric:{
    temperature:string,
    windSpeed:string,
    precipitation:string
    displayWindSpeed:string,
    displayPrecipitation:string
  },
  imperial:{
    temperature:string,
    windSpeed:string,
    precipitation:string
    displayWindSpeed:string,
    displayPrecipitation:string
  }
}

const unitMap:UnitMap = {
  metric:{
    temperature:"celsius",
    windSpeed:"kmh",
    precipitation:"mm",
    displayWindSpeed:"km/h",
    displayPrecipitation:"mm"
  },
  imperial:{
    temperature:"fahrenheit",
    windSpeed:"mph",
    precipitation:"inch",
    displayWindSpeed:"mph",
    displayPrecipitation:"in"
  },
}

type UnitType = keyof UnitMap; 

async function fetchCityCountry(lat:number, lon:number) {
  const res = await fetch(
    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
  );
  const data = await res.json();

  const userLocation:Location = {
    coordinate:[lat,lon],
    cityName:
      data.address.city ||
      data.address.town ||
      data.address.village ||
      data.address.hamlet,
    countryName: data.address.country,
  }

  return userLocation;
}


async function fetchWeatherData(coordinate: [number, number],unit:UnitType) {
  const params = {
    "latitude": coordinate[0],
    "longitude": coordinate[1],
    "daily": ["weather_code", "temperature_2m_max", "temperature_2m_min"],
    "hourly": ["temperature_2m", "weather_code"],
    "current": ["temperature_2m", "relative_humidity_2m", "wind_speed_10m", "precipitation", "weather_code"],
    "timezone": "auto",
    "wind_speed_unit":unitMap[unit].windSpeed ,
    "temperature_unit": unitMap[unit].temperature,
    "precipitation_unit": unitMap[unit].precipitation,
  };
  const url = "https://api.open-meteo.com/v1/forecast";
  const responses = await fetchWeatherApi(url, params);
  const response = responses[0]
  const utcOffsetSeconds = response.utcOffsetSeconds();

  const current = response.current()!;
  const hourly = response.hourly()!;
  const daily = response.daily()!;


  const weatherData = {
    current: {
      dateFormat: dayjs(new Date((Number(current.time()) + utcOffsetSeconds) * 1000)).format('dddd, MMM D, YYYY'),
      temperature: `${current.variables(0)!.value().toFixed(0)}°`,
      humidity: `${current.variables(1)!.value()}%`,
      wind_speed: `${current.variables(2)!.value().toFixed(0)} ${unitMap[unit].displayWindSpeed}`,
      precipitation: `${(current.variables(3)!.value().toFixed(0))} ${unitMap[unit].displayPrecipitation}`,
      weather_code: current.variables(4)!.value(),

    },
    hourly: (() => {
      const timeLength =
        (Number(hourly.timeEnd()) - Number(hourly.time())) / hourly.interval();

      const times = Array.from({ length: timeLength }, (_, i) =>
        new Date(
          (Number(hourly.time()) + i * hourly.interval() + utcOffsetSeconds) * 1000
        )
      );

      const temperatures = Array.from(hourly.variables(0)!.valuesArray() ?? []);
      const weatherCodes = Array.from(hourly.variables(1)!.valuesArray() ?? []);

      const grouped: {
        hour: string;
        temperature: string;
        weather_code: number;
      }[][] = [];

      times.forEach((date, i) => {
        const dayIndex = dayjs(date).day(); // assuming hourly data for full days
        if (!grouped[dayIndex]) grouped[dayIndex] = [];
        grouped[dayIndex].push({
          hour: dayjs(date).format("h A"),
          temperature: `${temperatures[i].toFixed(0)}°`,
          weather_code: weatherCodes[i],
        });
      });

      return grouped;
    })(),

    daily: (() => {
      const length =
        (Number(daily.timeEnd()) - Number(daily.time())) / daily.interval();

      const days = Array.from({ length }, (_, i) =>
        new Date(
          (Number(daily.time()) + i * daily.interval() + utcOffsetSeconds) * 1000
        )
      ).map((date) => dayjs(date).format("ddd"));

      const weatherCodes = Array.from(daily.variables(0)!.valuesArray() ?? []);
      const tempMax = Array.from(daily.variables(1)!.valuesArray() ?? []).map(
        (t) => `${t.toFixed(0)}°`
      );
      const tempMin = Array.from(daily.variables(2)!.valuesArray() ?? []).map(
        (t) => `${t.toFixed(0)}°`
      );

      return days.map((day, i) => ({
        day,
        weather_code: weatherCodes[i],
        temperature_max: tempMax[i],
        temperature_min: tempMin[i],
      }));
    })(),

  };

  console.log(weatherData.hourly)
  return weatherData
}

function App() {

  

  const [location, setLocation] = useState<Location>(null)
  const [unit,setUnit] = useState<UnitType>('metric')

  const { data: weatherData,isLoading } = useQuery(
    {
      queryKey: ['city_coordinate', location?.coordinate, unit],
      queryFn: () => fetchWeatherData(location!.coordinate,unit),
      staleTime: 3 * 60 * 1000,
      enabled: (location != null)
    }
  )

  useEffect(
    ()=>{
      navigator.geolocation.getCurrentPosition(
        async(pos)=>{
          if (!location){
            const userLocation = await fetchCityCountry(pos.coords.latitude,pos.coords.longitude)
            setLocation(userLocation)
          }
        }
      )
    },
    [location]
  )

  return (
    <div className="flex flex-col  bg-[#02012C] px-[5vw] py-4 pb-10">
      <AppHeader unit={unit} setUnit={setUnit} />
      <h1 className="text-center w-full text-white text-6xl my-10 font-extrabold font-app-heading">How's the sky looking today?</h1>
      <SearchContainer onSuggestionClick={(location) => { setLocation(location) }} />
      <div className="grid lg:grid-cols-[65%_35%] gap-6 mt-8 @container">
        <div>
          <WeatherInfoCard data={weatherData?.current ?? null} location={location} />
          <WeatherDetailList data={weatherData?.current ?? null} isLoading={isLoading} />
          <DailyForecastContainer data={weatherData?.daily ?? null} isLoading={isLoading} />
        </div>
        <HourlyForecastContainer data={weatherData?.hourly ?? null} isLoading={isLoading} />
      </div>
    </div>
  )
}

export default App