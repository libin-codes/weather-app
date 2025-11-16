import WeatherDetailCard from "./WeatherDetailCard";

interface WeatherDetailListProps{
  data: {
    dateFormat: string,
    temperature: string,
    humidity: string,
    wind_speed: string,
    precipitation: string,
    weather_code: number,
  } | null,
  isLoading:boolean
}


export default function WeatherDetailList({data,isLoading}:WeatherDetailListProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(120px,_1fr))] auto-rows-auto text-white gap-4 mt-6 w-full" >
      <WeatherDetailCard title="Feels Like" data={data?.temperature} isLoading={isLoading} />
      <WeatherDetailCard title="Humidity" data={data?.humidity} isLoading={isLoading}/>
      <WeatherDetailCard title="Wind" data={data?.wind_speed} isLoading={isLoading}/>
      <WeatherDetailCard title="Precipitation" data={data?.precipitation} isLoading={isLoading} />
    </div>
  );
}
