import { NavLink } from "react-router-dom"
import classNames from "classnames"
import { HiOutlineCurrencyDollar, HiOutlinePencilSquare } from "react-icons/hi2";
import { IoEyeOutline, IoRocketOutline } from "react-icons/io5";
import { LiaAngleRightSolid } from "react-icons/lia";
import { BiComment, BiMoneyWithdraw } from "react-icons/bi";
import { GoHistory } from "react-icons/go";

export default function MainMenu({toggle, changeToggleStatus}) {
    
    const activeItem = (status) => {
        let activeClass = classNames({
            "flex flex-row gap-[10px] items-center py-2 px-3 rounded-2xl text-[#676767]": true,
            "bg-blue-50": status,
            "bg-white": !status,
            "md:px-2": toggle
        })
        return activeClass;
    }
    let iconClassName = classNames({
        "md:w-7 md:h-6 w-6 h-6": toggle,
        "w-6 h-6": !toggle,
        "text-[#b5b5b5]":true
    })
    return (
        <div className={`w-64 h-full md:w-[259px] vazir-medium ${toggle? "flex shadow-md md:shadow-none absolute z-10 top-0 right-0 md:relative": "hidden md:flex"} flex-col gap-2 bg-white p-3`}>
            <div onClick={changeToggleStatus} className={"block md:hidden absolute left-2 top-[26px] text-[#909090] text-md "}>
                <LiaAngleRightSolid size={24}/>
            </div>
            <h1 className={`line-clamp-1 text-center text-2xl py-3 text-[#909090] font-bold`}>TDA۲۴.IR</h1>
                <NavLink to={"/dashboard/need-for-action"} className={({isActive}) => activeItem(isActive)}>
                    <IoRocketOutline size={24} className={iconClassName}/>
                    <span className={`text-[14px] text-[#676767] ${toggle? "md:hidden" : "block"}`}>نیاز به اقدام</span>
                </NavLink>
                <NavLink to={"/dashboard/payment"} className={({isActive}) => activeItem(isActive)}>
                    <IoEyeOutline size={24} className={iconClassName}/>
                    <span className={`text-[14px] text-[#676767] ${toggle? "md:hidden" : "block"}`}>نیاز به پرداخت</span>
                </NavLink>
                <NavLink to={"/dashboard/record-doctor"} className={({isActive}) => activeItem(isActive)}>
                    <HiOutlinePencilSquare size={24} className={iconClassName}/>
                    <span className={`text-[14px] text-[#676767] ${toggle? "md:hidden" : "block"}`}>ثبت پزشک</span>
                </NavLink>
                <NavLink to={"/dashboard/currency"} className={({isActive}) => activeItem(isActive)}>
                    <HiOutlineCurrencyDollar size={24} className={iconClassName}/>
                    <span className={`text-[14px] text-[#676767] ${toggle? "md:hidden" : "block"}`}>قیمت گزاری</span>
                </NavLink>
                <NavLink to={"/dashboard/comments"} className={({isActive}) => activeItem(isActive)}>
                    <BiComment size={24} className={iconClassName}/>
                    <span className={`text-[14px] text-[#676767] ${toggle? "md:hidden" : "block"}`}>نظر کاربران</span>
                </NavLink>
                <NavLink to={"/dashboard/request-withdraw"} className={({isActive}) => activeItem(isActive)}>
                    <BiMoneyWithdraw size={24} className={iconClassName}/>
                    <span className={`text-[14px] text-[#676767] ${toggle? "md:hidden" : "block"}`}>درخواست برداشت</span>
                </NavLink>
                <NavLink to={"/dashboard/financial-history"} className={({isActive}) => activeItem(isActive)}>
                    <GoHistory size={24} className={iconClassName}/>
                    <span className={`text-[14px] text-[#676767] ${toggle? "md:hidden" : "block"}`}>سابقه مالی</span>
                </NavLink>
        </div>
    )
}