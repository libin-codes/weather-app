
import {
  Command,
  CommandList,
  CommandEmpty,
  CommandGroup
} from "../ui/command"
import SearchResutCard from "./SearchResultCard"

type Coordinate = [number,number]

interface SearchResultListProps {
  onSuggestionClicked:(countryName:string,cityName: string,coordinate:Coordinate) => void
  searchSuggestions:any[]
  isSearchApiLoading:boolean
}



export default function SearchResultList({ searchSuggestions,onSuggestionClicked,isSearchApiLoading }: SearchResultListProps) {

  return (
    <Command style={{
      scrollbarColor: "grey transparent",
      scrollbarWidth: "thin",
    }}>
      <CommandList>
        <CommandEmpty>{isSearchApiLoading ? "Searching..." : "No Result Found"}</CommandEmpty>
        <CommandGroup className="space-y-10">
          {
            searchSuggestions?.map(
              (suggestion) => {
                const coords:Coordinate = [suggestion.latitude,suggestion.longitude]
                return <SearchResutCard 
                key={suggestion.id} 
                info={suggestion} 
                onClick={()=>{onSuggestionClicked(suggestion.country,suggestion.name,coords)}} />
              }
            )
          }

        </CommandGroup>
      </CommandList>
    </Command>
  )
}