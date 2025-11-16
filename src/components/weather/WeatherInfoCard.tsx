
import { Skeleton } from "@/components/ui/skeleton"
 import { BeatLoader} from "react-spinners"
import WeatherIcon from "../common/WeatherIcon"

type Location = {
  coordinate: [number, number]
  countryName: string,
  cityName: string
} | null


interface weatherInfoProps {
  data: {
    dateFormat: string,
    temperature: string,
    humidity: string,
    wind_speed: string,
    precipitation: string,
    weather_code: number,
  } | null,

  location: Location
}

export default function WeatherInfoCard({ data, location }: weatherInfoProps) {
  return (

    <>
      {
      (data == null) && 
      <Skeleton className="flex justify-center items-center rounded-3xl gap-2 h-70 w-full">
        <p className="text-lg font-semibold">Loading </p>
        <BeatLoader size={6} color="white"/>
      </Skeleton>
      }
      {
      (data != null ) && 
      <div className="flex flex-col sm:flex-row sm:justify-between items-center px-8 justify-around rounded-3xl h-70 w-full object-fill bg-[url(./assets/images/bg-today-small.svg)] bg-cover bg-center">
        <div className="flex flex-col gap-1 justify-center items-center">
          <h1 className="text-3xl text-center text-white font-semibold">{`${location?.cityName}, ${location?.countryName}`}</h1>
          <p className="text-white opacity-90 font-light text-md">{data?.dateFormat ?? "--"}</p>
        </div>
        <div className="flex items-center justify-center ">
          <WeatherIcon weatherCode={data.weather_code} className="w-25 h-25" />
          <h1 className="text-8xl mb-2 italic text-white font-semibold">
            {data?.temperature ?? '--'}
          </h1>
        </div>
      </div>
      }
    </>


  );
}
