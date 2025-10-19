import settingsIcon from "../assets/images/icon-units.svg"
import dropDownIcon from "../assets/images/icon-dropdown.svg"
import AppLogo from "../assets/images/logo.svg"


export default function AppHeader() {
  return (
    <div className="flex justify-between">
        <img src={AppLogo} alt="" className="w-40"/>
        <button className="flex gap-2 py-2 px-4 items-center bg-[#262540] rounded-md cursor-pointer">
            <img src={settingsIcon} alt="" className="w-4 h-4"/>
            <p className="text-white">Units</p>
            <img src={dropDownIcon} alt="" className="w-3.5 h-3.5"/>
        </button>
    </div>
  )
}
