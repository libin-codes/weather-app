import AppLogo from "../assets/images/logo.svg"
import { Settings as SettingsIcon } from "lucide-react"
import { ChevronDown as DropDownIcon } from 'lucide-react';
import { Button } from "./ui/button";

export default function AppHeader() {
  return (
    <div className="flex justify-between">
      <img src={AppLogo} alt="" className="w-40" />
      <Button>
        <SettingsIcon />
        <p>Units</p>
        <DropDownIcon />
      </Button>
    </div>
  )
}
