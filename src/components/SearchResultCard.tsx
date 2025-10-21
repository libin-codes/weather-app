import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle
} from "@/components/ui/item"
import {
  CommandItem,
} from "./ui/command"

import {
  ItemSeparator
} from "@/components/ui/item"


import { MapPin } from 'lucide-react';


export default function SearchResutCard({cityName,stateName,countryName,onSelect}) {
  return (
    <CommandItem asChild onSelect={() => onSelect(cityName)}>
      <Item size={"sm"}>
        <ItemMedia  >
          <MapPin />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>
            {cityName}
          </ItemTitle>
          <ItemDescription>
            {stateName}, {countryName}
          </ItemDescription>
        </ItemContent>
      </Item>
      
    </CommandItem>
  )
}