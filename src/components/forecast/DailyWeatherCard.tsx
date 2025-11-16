import WeatherIcon from "@/components/common/WeatherIcon";



interface DailyWeatherCardProps{
  data:DailyWeatherData
}

type DailyWeatherData = {
  temperature_max :string,
  temperature_min:string,
  day:string,
  weather_code:number
}

export default function DailyWeatherCard({data}:DailyWeatherCardProps) {
  return (
    <div className="flex flex-col items-center text-white bg-[#262540] h-38 rounded-md px-3 py-2 border-[#3C3B5E] border-1">
      <h2>{data.day}</h2>
      <WeatherIcon weatherCode={data.weather_code} className="w-13 h-13 my-auto" />
      <div className="flex justify-between w-full">
        <p>{data.temperature_min}</p>
        <p>{data.temperature_max}</p>
      </div>
    </div>
  );
}
