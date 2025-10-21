import {
  Command,
  CommandList,
  CommandEmpty,
  CommandGroup,
} from "./ui/command"

import SearchResutCard from "./SearchResultCard"

export default function SearchResultList({setValue,setOpen}) {
  return (
    <Command style={{
      scrollbarColor: "grey transparent",
      scrollbarWidth: "thin",
    }}>
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup className="space-y-10">
          <SearchResutCard cityName={'kochi'} stateName={'Kerala'} countryName={'India'} onSelect={(cityName)=>{setValue(cityName); setOpen(false)}} />
          <SearchResutCard cityName={'Thrivananthapuram'} stateName={'Kerala'} countryName={'India'} onSelect={(cityName)=>{setValue(cityName); setOpen(false)}}/>
          <SearchResutCard cityName={'Delhi'} stateName={'Hariyana'} countryName={'India'} onSelect={(cityName)=>{setValue(cityName); setOpen(false)}} />
       
        </CommandGroup>
      </CommandList>
    </Command>
  )
}