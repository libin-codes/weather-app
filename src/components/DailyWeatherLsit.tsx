import DailyWeatherCard from "./DailyWeatherCard";

export default function DailyWeatherList() {
  return (
    <div className="flex flex-row flex-wrap gap-3 ">
      <DailyWeatherCard />
      <DailyWeatherCard />
      <DailyWeatherCard />
      <DailyWeatherCard />
      <DailyWeatherCard />
      <DailyWeatherCard />
      <DailyWeatherCard />
    </div>
  );
}
