import { NavLink } from "react-router-dom"
import classNames from "classnames"
import { LuClipboard } from "react-icons/lu";
import { FiHome, FiUser } from "react-icons/fi";
import { HiOutlinePencilSquare } from "react-icons/hi2";

export default function MainMenu() {
    
    const activeItem = (status) => {
        let activeClass = classNames({
            "flex flex-row gap-[10px] items-center py-2 px-3 rounded-2xl text-[#676767]": true,
            "bg-blue-50": status,
            "bg-white": !status
        })
        return activeClass;
    }
    return (
        <div className={`w-64 h-full md:w-[259px] hidden md:flex flex-col gap-2 vazir-medium bg-white p-3`}>
            <h1 className={`line-clamp-1 text-center text-2xl py-3 text-[#909090] font-bold`}>TDA۲۴.IR</h1>
            <NavLink to={"/laboratory/need-for-action"} className={({isActive}) => activeItem(isActive)}>
                <LuClipboard size={24} className="text-[#b5b5b5]"/>
                <span className={`text-[14px] text-[#676767]`}>نیاز به اقدام</span>
            </NavLink>
            <NavLink to={"/laboratory/service-desk"} className={({isActive}) => activeItem(isActive)}>
                <FiHome size={24} className="text-[#b5b5b5]"/>
                <span className={`text-[14px] text-[#676767]`}>میز خدمت</span>
            </NavLink>
            <NavLink to={"/laboratory/profile"} className={({isActive}) => activeItem(isActive)}>
                <FiUser size={24} className="text-[#b5b5b5]"/>
                <span className={`text-[14px] text-[#676767]`}>پروفایل</span>
            </NavLink>
            <NavLink to={"/laboratory/record-doctor"} className={({isActive}) => activeItem(isActive)}>
                <HiOutlinePencilSquare size={24} className="text-[#b5b5b5]"/>
                <span className={`text-[14px] text-[#676767]`}>ثبت پزشک</span>
            </NavLink>
        </div>
    )
}