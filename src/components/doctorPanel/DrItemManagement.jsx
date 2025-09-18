import classNames from "classnames";
import { LiaAngleLeftSolid } from "react-icons/lia";

export default function DrItemManagement({status, pay, title, text, children, onClick}) {
    const showStatus = classNames({
            "text-[#00C313] bg-[#CDF2D3]": status,
            "text-[#676767] bg-[#e9e9e9]": !status
        })

    return(
        <div className={`w-[366px] h-[120px] vazir-medium flex flex-col items-center rounded-[15px] p-2 border border-[#909090aa] ${status? "shadow-md" : ""}`}>
            <div className="w-full h-3/4 flex flex-row items-start justify-between">
                <div className="w-full h-3/4 flex flex-row items-center gap-3 pr-2">
                    <span className={status? "text-[#676767]" : "text-[#0005]"}>
                        {children}
                    </span>
                    <div className="flex flex-col">
                        <span className={`${status? "text-black" : "text-[#0005]"} text-[16px]`}>{title}</span>
                        <span className={`${status? "text-[#676767]" : "text-[#0005]"} text-[12px]`}>{text}</span>
                    </div>
                </div>
                <div className={`w-[84px] h-10 flex justify-center items-center text-[16px] rounded-[10px] ${showStatus}`}>
                    {
                        status? "فعال" : "غیر فعال"
                    }
                </div>
            </div>
            <div className="w-full h-1/4 pt-1 flex flex-row justify-between items-center border-t border-t-[#efefef]">
                <span className={`${status? "text-[#676767]" : "text-[#0005]"} text-[16px]`}>
                    ویزیت {pay} تومان
                </span>
                <button type="button" onClick={onClick} className="text-[16px] flex flex-row text-[#006ECF]">
                    تنظیمات
                    <LiaAngleLeftSolid size={24}/>
                </button>
            </div>
        </div>
    )
}