import React from "react";
import { FiUser } from "react-icons/fi";
import { FiHome } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
const Navbar = ()=>{
    let navigate = useNavigate()
    return(
        <div className="fixed mx-auto bottom-0 left-0 flex items-center text-[14px] justify-between px-6 bg-white border border-top border-gray-300 w-[100%] h-16 shadow-md z-100">
            <div className="flex flex-col items-center text-[#676767] vazir-medium text-center text-[14px] justify-center gap-2">
                <FiHome className="text-[22px]" onClick={() => navigate('/content')} />
                <div>میز خدمت</div>
            </div>
            <div className="flex flex-col items-center text-[#676767] vazir-medium text-center text-[14px] justify-center gap-2">
                <FiUser className="text-[22px]" />
                <div>پرونده پزشکی</div>
            </div>
            <div className="flex flex-col items-center text-[#676767] vazir-medium text-center text-[14px] justify-center gap-2">
               <FiUser onClick={()=>navigate('/profile')} className="text-[22px]" />
                <div>پروفایل کاربری</div>
            </div>
        </div>
    )
}
export default Navbar;