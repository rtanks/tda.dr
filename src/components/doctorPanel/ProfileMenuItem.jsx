import { LiaAngleLeftSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

export function ProfileMenuItem({children, title, route}) {
    return (
        <Link to={route} className="w-full h-7 vazir-medium pr-[17px] flex flex-row justify-between items-center">
            <div className="flex flex-row items-center gap-4">
                {children}
                <span className="text-[16px] text-[#5f5f5f]">{title}</span>
            </div>
            <LiaAngleLeftSolid size={24} className="text-[#5f5f5f]"/>
        </Link>
    )
}

export function ProfileMenuItemWithoutAngle({children, title, route}) {
    return (
        <Link to={route} className="w-full h-7 vazir-medium pr-[17px] flex flex-row justify-between items-center">
            <div className="flex flex-row items-center gap-4">
                {children}
                <span className="text-[16px] text-[#5f5f5f]">{title}</span>
            </div>
        </Link>
    )
}