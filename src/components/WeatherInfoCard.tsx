import sunnyIcon from "../assets/images/icon-sunny.webp"

export default function WeatherInfoCard() {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between items-center px-8 justify-around rounded-3xl h-70 w-full object-fill bg-[url(./assets/images/bg-today-small.svg)] bg-cover bg-center">
      <div className="flex flex-col gap-1 justify-center items-center">
        <h1 className="text-3xl text-white font-semibold">Berlin, Germany</h1>
        <p className="text-white opacity-90 font-light text-md">Tuesday, Aug 5, 2025</p>
      </div>
      <div className="flex items-center justify-center ">
        <img src={sunnyIcon} alt="" className="w-25 h-25" />
        <h1 className="text-8xl mb-2 italic text-white font-semibold">68</h1>
      </div>
    </div>
  );
}
