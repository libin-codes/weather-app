import HourlyWeatherCard from "./HourlyWeatherCard";

export default function HourlyWeatherList() {
  return (
    <div style={{
      scrollbarColor:"grey transparent",
      scrollbarWidth:"thin",
    }} className="flex flex-col gap-3 w-full overflow-y-auto">
      <HourlyWeatherCard />
      <HourlyWeatherCard />
      <HourlyWeatherCard />
      <HourlyWeatherCard />
      <HourlyWeatherCard />
      <HourlyWeatherCard />
      <HourlyWeatherCard />
      <HourlyWeatherCard />
      <HourlyWeatherCard />
      <HourlyWeatherCard />
      <HourlyWeatherCard />
      <HourlyWeatherCard />
      <HourlyWeatherCard />
      <HourlyWeatherCard />
      <HourlyWeatherCard />
      
    </div>
  );
}
