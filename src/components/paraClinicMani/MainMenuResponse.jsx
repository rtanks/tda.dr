import classNames from "classnames";
import { FiHome, FiUser } from "react-icons/fi";
import { LuClipboard } from "react-icons/lu";
import { NavLink } from "react-router-dom";

export default function MainMenuResponse() {
    const activeClass = (activeStatus) => {
        return classNames({
            "flex flex-col items-center vazir-medium text-center text-[14px] justify-center gap-2": true,
            "text-[#676767]": !activeStatus,
            "text-blue-700": activeStatus   
        })
    }
    return (
        <div className={`fixed mx-auto bottom-0 left-0 right-0 flex md:hidden items-center text-[14px] justify-between px-6 bg-white border border-top border-gray-300 w-[402px] h-16 z-20`}>
            <NavLink to={"/paraclinic/service-desk"} className={({isActive}) => activeClass(isActive)}>
                <FiHome size={22} />
                <div>میز خدمت</div>
            </NavLink>
            <NavLink to={"/paraclinic/need-for-action"} className={({isActive}) => activeClass(isActive)}>
                <LuClipboard size={22} />
                <div>نیاز به اقدام</div>
            </NavLink>
            <NavLink to={"/paraclinic/profile"} className={({isActive}) => activeClass(isActive)}>
               <FiUser size={22} />
                <div>پروفایل کاربری</div>
            </NavLink>
        </div>
    )
}