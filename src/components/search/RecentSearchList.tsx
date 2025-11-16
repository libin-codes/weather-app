import {
  Command,
  CommandList,
  CommandEmpty,
  CommandGroup,
} from "../ui/command"


import RecentSearchCard from "./RecentSearchCard";

export default function RecentSearchList() {
  return (
    <Command style={{
      scrollbarColor: "grey transparent",
      scrollbarWidth: "thin",
    }}>
      <CommandList>
        <CommandEmpty>No recent search found.</CommandEmpty>
        <CommandGroup className="space-y-10">
          <RecentSearchCard />
          <RecentSearchCard />
          <RecentSearchCard />
          <RecentSearchCard />
        </CommandGroup>
      </CommandList>
    </Command>
  )
}