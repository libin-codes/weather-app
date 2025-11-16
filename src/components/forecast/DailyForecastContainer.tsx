
import { Skeleton } from "@/components/ui/skeleton";
import DailyWeatherCard from "./DailyWeatherCard"

type DailyWeatherData = {
  day: string;
  weather_code: number;
  temperature_max: string;
  temperature_min: string;
}

interface DailyForecastContainerProps {
  data: DailyWeatherData[] | null
  isLoading: boolean

}

export default function DailyForecastContainer({ data, isLoading }: DailyForecastContainerProps,) {

  return (
    <div className="flex flex-col mt-8">
      <div className="w-full pb-4">
        <h1 className="text-lg font-medium text-white">Daily forecast</h1>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(95px,_1fr))] auto-rows-auto gap-3 ">
        {(isLoading || data == null) &&
          Array.from(
            { length: 7 }, (_, i) => (
              <Skeleton key={i} className="h-38" />
            )
          )
        }
        {!isLoading && data?.map((dailyWeatherData) => <DailyWeatherCard data={dailyWeatherData} />)}
      </div>
    </div>
  )
}