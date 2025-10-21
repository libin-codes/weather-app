import { useRef, useState } from "react"
import searchIcon from "../assets/images/icon-search.svg"
import { Button } from "./ui/button"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,

} from "./ui/popover"

import SearchResultList from "./SearchResultList"

export default function SearchContainer() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")
  const inputRef = useRef(null)

  return (
    <div className="flex flex-col gap-3 md:flex-row mt-3 justify-center">
      <Popover open={open} >
        <PopoverTrigger asChild>
          <div className="flex items-center bg-[#262540] py-3 px-4 rounded-lg gap-4 md:w-full lg:w-[40%] cursor-pointer">
            <img src={searchIcon} alt="" className="w-5 h-5" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search for a place..."
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onFocus={() => { setOpen(true) }}
              onBlur={() => { setOpen(false) }}
              className="outline-0 w-full text-white bg-transparent"
            />
          </div>
        </PopoverTrigger>
        <PopoverContent
          className=" relative w-[var(--radix-popover-trigger-width)] p-0"
          align="start"
          onOpenAutoFocus={(e) => { e.preventDefault() }}
        >
          <SearchResultList setOpen={setOpen} setValue={setValue}/>
        </PopoverContent>
      </Popover>
      <Button size={"lg"}>Search</Button>
    </div>
  )
}