import HourlyWeatherList from "./HourlyWeatherList"
import { Select,SelectContent,SelectGroup,SelectItem,SelectTrigger,SelectValue } from "./ui/select";

export default function HourlyForecastContainer() {

  const week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

  return (
    <div className="flex flex-col bg-[#262540] min-[1260px]:h-160 min-[1024px]:h-200  h-full  rounded-xl p-4">
      <div className="flex justify-between items-center w-full h-fit mb-4 text-white">
        <h1 className="text-lg font-medium">Hourly forecast</h1>
        <Select defaultValue="0" >
          <SelectTrigger className="bg-accent w-32 focus-visible:ring-0 [&>span]:flex [&>span]:justify-center [&>span]:flex-1">
            <SelectValue placeholder={week[0]}  />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {
                week.map(
                  (day,index)=>{
                    return <SelectItem value={index.toString()} key={index} >{day}</SelectItem>
                  }
                )
              }
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <HourlyWeatherList />
    </div>
  )
}
