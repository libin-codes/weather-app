import WeatherDetailCard from "./WeatherDetailCard";


export default function WeatherDetailList() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(120px,_1fr))] auto-rows-auto text-white gap-4 mt-6 w-full" >
      <WeatherDetailCard />
      <WeatherDetailCard />
      <WeatherDetailCard />
      <WeatherDetailCard />
    </div>
  );
}
