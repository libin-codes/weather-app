
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import HourlyWeatherCard from "./HourlyWeatherCard";
import { ScrollBar } from "@/components/ui/scroll-area";
import { useState } from "react";
import dayjs from "dayjs";
import { Skeleton } from "@/components/ui/skeleton";

interface HourlyForecastContainerProps {
  data: {
    hour: string;
    temperature: string;
    weather_code: number;
  }[][] | null;
  isLoading:boolean
}

export default function HourlyForecastContainer({ data,isLoading }: HourlyForecastContainerProps) {

  const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const [daySelection,setDaySelection] = useState(Number(dayjs().day()))

  return (
    <div className="flex flex-col bg-[#262540] min-[1260px]:h-160 min-[1024px]:h-200  h-full  rounded-xl p-4">
      <div className="flex justify-between items-center w-full h-fit mb-4 text-white">
        <h1 className="text-lg font-medium">Hourly forecast</h1>
        <Select defaultValue={daySelection.toString()} onValueChange={(value)=>setDaySelection(Number(value))}>
          <SelectTrigger className="bg-accent w-32 focus-visible:ring-0 font-medium [&>span]:flex [&>span]:justify-center [&>span]:flex-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {
                week.map(
                  (day, index) => {
                    return <SelectItem 
                    value={index.toString()} 
                    key={index} 
                    onSelect={()=>{console.log(index)}} >{day}</SelectItem>
                  }
                )
              }
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <ScrollArea className="overflow-y-hidden" >
        <div className="flex flex-col gap-2.5 w-full lg:pr-3">
          {(isLoading || data==null) && Array.from(
            {length:10},
            (_,i)=>(
              <Skeleton key={i} className="h-16 w-full"/>
            )
          )}
          {data && data[daySelection].map((info) => <HourlyWeatherCard data={info} />)}


        </div>
        <ScrollBar />
      </ScrollArea>
    </div>
  )
}
