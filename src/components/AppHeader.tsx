import AppLogo from "../assets/images/logo.svg"
import { Settings as SettingsIcon } from "lucide-react"
import { ChevronDown as DropDownIcon } from 'lucide-react';
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,

  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,

} from "./ui/dropdown-menu";
import { useState } from "react";


export default function AppHeader() {

  const [isMetric, setIsMetric] = useState(true)

  return (
    <div className="flex justify-between">
      <img src={AppLogo} alt="" className="w-40" />

      <DropdownMenu >
        <DropdownMenuTrigger className="bg-accent flex focus-visible:ring-0 rounded-md outline-1 text-white">
          <Button>
            <SettingsIcon />
            <p>Units</p>
            <DropDownIcon />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className=" w-50 " align="end">
          <Button variant={'accent'} className=" border-0 w-full" onClick={
            ()=>{
              setIsMetric(!isMetric)
            }
          }>Switch to {(isMetric) ? "Imperial" : "Metric"}</Button>
          <DropdownMenuGroup>
            <DropdownMenuLabel className="text-xs opacity-70 font-light">Temperature</DropdownMenuLabel>
            <DropdownMenuCheckboxItem checked={isMetric} >Celsius</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={!isMetric}>Fahrenheit</DropdownMenuCheckboxItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator className="mx-1" />
          <DropdownMenuGroup>
            <DropdownMenuLabel className="text-xs opacity-70 font-light">Wind Speed</DropdownMenuLabel>
            <DropdownMenuCheckboxItem checked={isMetric}>km/h</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={!isMetric}>mph</DropdownMenuCheckboxItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator className="mx-1" />
          <DropdownMenuGroup>
            <DropdownMenuLabel className="text-xs opacity-70 font-light">Precipitation</DropdownMenuLabel>
            <DropdownMenuCheckboxItem checked={isMetric}>Millimeters (mm)</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={!isMetric}>inches (in)</DropdownMenuCheckboxItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

    </div>
  )
}
