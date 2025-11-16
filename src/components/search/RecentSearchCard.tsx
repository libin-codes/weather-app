import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle
} from "@/components/ui/item"
import {
  CommandItem,
} from "../ui/command"


import { History } from 'lucide-react'

import SunnyIcon from '../assets/images/icon-sunny.webp'


export default function RecentSearchCard() {
  return (
    <CommandItem asChild >
      <Item size={"sm"} className="gap-0 pl-0">
        <ItemMedia variant={"image"} >
          <History />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>
            Chennai
          </ItemTitle>
          <ItemDescription>
            Chennai, TamilNadu
          </ItemDescription>
        </ItemContent>
        <ItemContent className="flex flex-row items-center gap-2">
          <ItemMedia variant={"image"}  >
            <img src={SunnyIcon}  />
          </ItemMedia>
          <h1 className="mt-1 mr-2 text-xl">56</h1>
          
        </ItemContent>
        
      </Item>

    </CommandItem>
  )
}