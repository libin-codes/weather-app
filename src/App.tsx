import WeatherInfoCard from "./components/WeatherInfoCard"
import SearchContainer from "./components/SearchContainer"
import AppHeader from "./components/AppHeader"
import HourlyForecastContainer from "./components/HourlyForecastContainer"
import WeatherDetailList from "./components/WeatherDetailList"
import DailyForecastContainer from "./components/DailyForecastContainer"

function App() {
  return (
    <div className="flex flex-col  bg-[#02012C] px-[5vw] py-4 pb-10">
      <AppHeader/>
      <h1 className="text-center w-full text-white text-5xl my-8 font-bold">How's the sky looking today?</h1>

      <SearchContainer/>
      <div className="grid lg:grid-cols-[65%_35%] gap-6 mt-8 @container">
        <div>
          <WeatherInfoCard />
          <WeatherDetailList/>
          <DailyForecastContainer/>
        </div>
          <HourlyForecastContainer />
      </div>
      
      
    </div>
  )
}

export default App