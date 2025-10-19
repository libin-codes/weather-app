import DailyWeatherList from "./DailyWeatherLsit"

export default function DailyForecastContainer(){
    return(
        <div className="flex flex-col mt-8">
            <div className="w-full pb-4">
                <h1 className="text-lg font-medium text-white">Daily forecast</h1>
            </div>
            <DailyWeatherList/>
        </div>
    )
}