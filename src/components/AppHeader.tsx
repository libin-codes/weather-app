import AppLogo from "../assets/images/logo.svg"
import {Settings as SettingsIcon} from "lucide-react"
import { ChevronDown as DropDownIcon } from 'lucide-react';

export default function AppHeader() {
  return (
    <div className="flex justify-between">
        <img src={AppLogo} alt="" className="w-40"/>
        <button className="flex gap-2 py-2 px-4 items-center bg-[#262540] rounded-md cursor-pointer text-white">
            <SettingsIcon/>
            <p>Units</p>
            <DropDownIcon/>
        </button>
    </div>
  )
}
