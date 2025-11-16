import WeatherIcon from "@/components/common/WeatherIcon";

interface HourlyWeatherCardProps{
  data:HourlyWeatherData
}

type HourlyWeatherData = {
    hour:string,
    temperature: string,
    weather_code: number,
  }

export default function HourlyWeatherCard({data}:HourlyWeatherCardProps) {
  return (
    <div className="flex h-16 w-full justify-between items-center text-white bg-[#302F4A] rounded-md px-4 py-2 border-[#3C3B5E] border-1">
      <div className="flex w-fit items-center gap-2">
        <WeatherIcon weatherCode={data.weather_code}  className="w-10 h-10"  />
        <p className="text-lg">{data.hour}</p>
      </div>
      <p>{data.temperature}</p>
    </div>
  );
}
