import partlyCloudyIcon from "../assets/images/icon-partly-cloudy.webp"

export default function HourlyWeatherCard() {
  return (
    <div className="flex h-16 w-full justify-between items-center text-white bg-[#302F4A] rounded-md px-4 py-2 border-[#3C3B5E] border-1">
      <div className="flex w-fit items-center gap-2">
        <img src={partlyCloudyIcon} className="w-10 h-10" alt="" />
        <p className="text-lg">3 PM</p>
      </div>
      <p>68</p>
    </div>
  );
}
