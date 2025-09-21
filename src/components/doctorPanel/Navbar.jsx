import classNames from "classnames";
import { FiHome, FiUser } from "react-icons/fi";
import { LuClipboard } from "react-icons/lu";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar({active, changeActiveElem}) {
    const navigate = useNavigate();
    
    const activeClass = (activeStatus) => {
        return classNames({
            "flex flex-col items-center vazir-medium text-center text-[14px] justify-center gap-2": true,
            "text-[#676767]": !activeStatus,
            "text-blue-700": activeStatus   
        })
    }
    return (
        <div className="fixed mx-auto bottom-0 left-0 right-0 flex items-center text-[14px] justify-between px-6 bg-white border border-top border-gray-300 w-[402px] h-16 z-100">
            <button onClick={() => changeActiveElem({serviceDesk: true, needAction: false, profile: false}, "serviceDesk")} className={activeClass(active.serviceDesk)}>
                <FiHome size={22} />
                <div>میز خدمت</div>
            </button>
            <button onClick={() => changeActiveElem({serviceDesk: false, needAction: true, profile: false}, "needAction")} className={activeClass(active.needAction)}>
                <LuClipboard size={22} />
                <div>نیاز به اقدام</div>
            </button>
            <button onClick={() => changeActiveElem({serviceDesk: false, needAction: false, profile: true}, "profile")} className={activeClass(active.profile)}>
               <FiUser onClick={()=>navigate('/dashboard/profile-doctor')} size={22} />
                <div>پروفایل کاربری</div>
            </button>
        </div>
    )
}