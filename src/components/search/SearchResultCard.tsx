import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  CommandItem,
} from "../ui/command"


interface SearchResultCardProps {
  onClick: (cityName: string) => void;
  info:{
    country_code:string,
    admin1:string,
    name:string,
    country:string
  }
}


export default function SearchResutCard({info, onClick }: SearchResultCardProps) {
  const countryImage = `http://open-meteo.com/images/country-flags/${info.country_code.toLowerCase()}.svg`
  return (
    <CommandItem asChild onSelect={() => onClick(info.admin1)}>
      <Item size={"sm"}>
        <ItemMedia>
          <Avatar className="size-10">
            <AvatarImage className="border-1" src={countryImage} />
            <AvatarFallback>info.country_code</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>
            {info.name}
          </ItemTitle>
          <ItemDescription>
            {info.admin1}, {info.country}
          </ItemDescription>
        </ItemContent>
      </Item>
    </CommandItem>
  )
}