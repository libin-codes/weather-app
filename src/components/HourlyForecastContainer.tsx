import HourlyWeatherList from "./HourlyWeatherList"
import { ChevronDown as DropDownIcon } from 'lucide-react';

export default function HourlyForecastContainer() {
  return (
    <div className="flex flex-col bg-[#262540] min-[1260px]:h-160 min-[1024px]:h-200  h-full  rounded-xl p-4">
      <div className="flex justify-between items-center w-full h-fit mb-4 text-white">
        <h1 className="text-lg font-medium">Hourly forecast</h1>
        <button className="flex gap-2 justify-between items-center px-3 py-1.5 rounded-sm bg-[#3C3B5E] cursor-pointer">
          <p>Wednesday</p>
          <DropDownIcon/>
        </button>
      </div>
      <HourlyWeatherList />
    </div>
  )
}
