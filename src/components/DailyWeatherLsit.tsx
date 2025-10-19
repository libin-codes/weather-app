import DailyWeatherCard from "./DailyWeatherCard";

export default function DailyWeatherList() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(95px,_1fr))] auto-rows-auto gap-3 ">
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
