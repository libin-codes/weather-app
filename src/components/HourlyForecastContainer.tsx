import dropDownIcon from "../assets/images/icon-dropdown.svg"
import HourlyWeatherList from "./HourlyWeatherList"

export default function HourlyForecastContainer(){
    return (
        <div className="flex flex-col bg-[#262540] h-full rounded-xl p-4">
            <div className="flex justify-between items-center w-full h-fit mb-4">
                <h1 className="text-white text-lg font-medium">Hourly forecast</h1>
                <button className="flex gap-4 justify-between items-center px-3 py-1.5 rounded-sm bg-[#3C3B5E] cursor-pointer">
                    <p className="text-white">Wednesday</p>
                    <img src={dropDownIcon} alt="" className="w-3.5 h-3.5 mt-0.5"/>
                </button>
            </div>
            <HourlyWeatherList/>
        </div>
    )
}