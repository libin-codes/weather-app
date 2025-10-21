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

interface Unit {
  name: string,
  metric: string,
  imperial: string
}

export default function AppHeader() {

  const [isMetric, setIsMetric] = useState(true)

  const units: Unit[] = [
    {
      name: "Temperature",
      metric: "Celsius",
      imperial: "Fahrenheit"
    },
    {
      name: "Wind Speed",
      metric: "km/h",
      imperial: "mph"
    },
    {
      name: "Precipitation",
      metric: "Millimeters (mm)",
      imperial: "inches (in)"
    }
  ]
  return (
    <div className="flex justify-between">
      <img src={AppLogo} alt="" className="w-40" />

      <DropdownMenu >
        <DropdownMenuTrigger asChild className=" flex focus-visible:ring-0 rounded-md outline-1 text-white">
          <Button variant={"secondary"}>
            <SettingsIcon />
            <p>Units</p>
            <DropDownIcon />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className=" w-56 p-1.5" align="end">
          <Button className=" border-0 w-full" onClick={
            () => {
              setIsMetric(!isMetric)
            }
          }>Switch to {(isMetric) ? "Imperial" : "Metric"}</Button>

          {
            units.map(
              (unit,index) => {
                return (
                  <div key={index}>
                    <DropdownMenuGroup >
                      <DropdownMenuLabel className="text-xs opacity-70 font-light">{unit.name}</DropdownMenuLabel>
                      <DropdownMenuCheckboxItem checked={isMetric} >{unit.metric}</DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem checked={!isMetric}>{unit.imperial}</DropdownMenuCheckboxItem>
                    </DropdownMenuGroup>
                    {index < (units.length-1) && <DropdownMenuSeparator className="mx-1" />}
                  </div>
                )
              }
            )
          }

        
        </DropdownMenuContent>
      </DropdownMenu>

    </div>
  )
}
