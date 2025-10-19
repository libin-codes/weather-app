import RainyIcon from "../assets/images/icon-rain.webp"

export default function DailyWeatherCard() {
  return (
    <div className="flex flex-col items-center text-white bg-[#262540] min-w-25 md:max-w-25 md:flex-1 h-36 rounded-md px-3 py-2 border-[#3C3B5E] border-1">
      <h2>Tue</h2>
      <img src={RainyIcon} alt="" className="w-13 h-13 my-auto" />
      <div className="flex justify-between w-full">
        <p>68</p>
        <p>57</p>
      </div>
    </div>
  );
}
