import AppLogo from "../../assets/images/logo.svg"
import { Settings as SettingsIcon } from "lucide-react"
import { ChevronDown as DropDownIcon } from 'lucide-react';
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,

  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,

} from "../ui/dropdown-menu";

interface Unit {
  name: string,
  metric: string,
  imperial: string
}

type UnitMap = {
  metric:{
    temperature:string,
    windSpeed:string,
    precipitation:string
  },
  imperial:{
    temperature:string,
    windSpeed:string,
    precipitation:string
  }
}

type UnitType = keyof UnitMap; 


export default function AppHeader({unit,setUnit}:{unit:UnitType,setUnit:(value:UnitType)=>void}) {

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
              setUnit((unit=="metric")?"imperial":"metric")
            }
          }>Switch to {(unit=="metric")?"Imperial":"Metric"}</Button>

          {
            units.map(
              (u,index) => {
                return (
                  <div key={index}>
                    <DropdownMenuGroup >
                      <DropdownMenuLabel className="text-xs opacity-70 font-light">{u.name}</DropdownMenuLabel>
                      <DropdownMenuCheckboxItem checked={unit==="metric"} >{u.metric}</DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem checked={unit==="imperial"}>{u.imperial}</DropdownMenuCheckboxItem>
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
