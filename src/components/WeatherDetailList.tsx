import WeatherDetailCard from "./WeatherDetailCard";


export default function WeatherDetailList() {
  return (
    <div className="flex w-full flex-wrap text-white gap-4 mt-6" >
      <WeatherDetailCard />
      <WeatherDetailCard />
      <WeatherDetailCard />
      <WeatherDetailCard />
    </div>
  );
}
