import searchIcon from "../assets/images/icon-search.svg"
import { Button } from "./ui/button"

export default function SearchContainer() {
  return (
    <div className="flex flex-col gap-3 md:flex-row mt-3 justify-center">
      <div className="flex justify-center items-center bg-[#262540] py-3 px-4 rounded-lg gap-4 md:w-full lg:w-[40%] " >
        <img src={searchIcon} alt="" className="w-5 h-5 "  />
        <input type="text" placeholder="Search for a place..." className="outline-0 w-full text-white " />
      </div>
      <Button variant={'accent'} size={"lg"} >Search</Button>
    </div>
  )
}
