import { useCallback, useRef, useState } from "react"
import { useQuery } from "@tanstack/react-query";
import searchIcon from "../../assets/images/icon-search.svg"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover"
import SearchResultList from "./SearchResultList"
import debounce from "lodash.debounce";
import axios from "axios"
import { Button } from "../ui/button";
import { X } from "lucide-react";



type Location = {
  coordinate: [number, number]
  countryName: string,
  cityName: string
} | null

interface SearchContainerProps {
  onSuggestionClick: (location: Location) => void
}

async function fetchSearchSuggestions(query: string) {
  if (!query.trim()) return [];
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=3&language=en&format=json`;
  const request = await axios.get(url);
  return request.data.results ?? [];
}


export default function SearchContainer({ onSuggestionClick }: SearchContainerProps) {
  const [open, setOpen] = useState(false)
  const [searchInput, setSearchInput] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const searchLocation = useRef<Location>(null)



  const { data: searchSuggestions, isLoading, } = useQuery({
    queryKey: ["suggestions", searchQuery],
    queryFn: () => fetchSearchSuggestions(searchQuery),
    staleTime: Infinity,
    enabled: searchQuery.trim().length > 0
  }
  )


  const debouncedSetQuery = useCallback(
    debounce(
      (inputChange: string) => {
        setSearchQuery(inputChange)
      }, 500
    ), []
  )


  function handleInputChange(inputChange: string) {
    setSearchInput(inputChange)
    debouncedSetQuery(inputChange)
  }

  return (
    <div className="flex flex-col gap-3 md:flex-row mt-3 justify-center">
      <Popover open={open}>
        <PopoverTrigger asChild onBlur={() => setOpen(false)}>
          <div className="flex items-center bg-[#262540] h-14 px-4 rounded-lg gap-4 md:w-full lg:w-[50%] cursor-pointer">
            <img src={searchIcon} alt="" className="w-4 h-4 mb-0.5" />
            <input
              type="text"
              value={searchInput}
              placeholder="Search for a place..."
              onChange={(e) => handleInputChange(e.target.value)}
              onFocus={() => { setOpen(true) }}
              className="outline-0 w-full bg-transparent"
              
            />
            <Button hidden={searchInput==""} variant="transparent" size="sm" aria-label="Submit" 
            onClick={()=>{
              setSearchInput("")
              setSearchQuery("")
              }}>
              <X strokeWidth={3}/>
            </Button>
          </div>
        </PopoverTrigger>
        <PopoverContent
          className=" relative w-[var(--radix-popover-trigger-width)] p-0"
          align="start"
          onOpenAutoFocus={(e) => { e.preventDefault() }}
        >
          <SearchResultList
            onSuggestionClicked={
              (countryName, cityname, coords) => {
                searchLocation.current = { coordinate: coords, cityName: cityname, countryName: countryName }
                setSearchQuery(cityname)
                setSearchInput(cityname)
                setOpen(false)
                onSuggestionClick(searchLocation.current)
              }
            }
            searchSuggestions={searchSuggestions}
            isSearchApiLoading={isLoading} />
        </PopoverContent>
      </Popover>


    </div>
  )
}