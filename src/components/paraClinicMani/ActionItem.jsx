import classNames from "classnames"
import { LiaAngleLeftSolid } from "react-icons/lia"

export default function ActionItem({status, name, number, time, date, nationalCode, insurance, getSelectedElem, style}) {
    const statusClass = classNames({
        "bg-[#efefef] text-[#676767]": status === "سند ایجاد نشده" ? true : false,
        "bg-[#006ECF44] text-[#006ECF]": status === "پرداخت نشده" ? true : false,
        "bg-[#CDF2D3] text-[#00A51E]": status === "پرداخت شده" ? true : false
    })
    return (
        <>
            <div className="w-full bg-[#f7f7f7] p-3 rounded-[20px] flex md:hidden flex-col gap-4">
                <div className="w-full flex flex-row items-center justify-between">
                    <div className="text-black flex flex-row gap-1 items-center">
                        <span>{name}</span> / 
                        <span>{number}</span>
                    </div>
                    <button type="button">
                        <LiaAngleLeftSolid size={24} className="text-[#676767]"/>
                    </button>
                </div>
                <div className="w-[78%] h-10 py-2.5 px-3 rounded-[10px] text-[14px] text-[#676767]">cbc - bun - cr - na - k</div>
                <div className="w-full flex flex-row items-center gap-1 justify-end text-[14px] text-[#a7a7a7]">
                    <span>ثبت :</span>
                    <span>{time}</span>
                    <span>{date}</span>
                </div>
            </div>

            <div className="w-full h-max md:h-[70px] vazir-medium text-[14px] p-[15px] hidden md:flex flex-col md:flex-row items-center gap-5 bg-white rounded-[20px]">
                <div className="w-[30%] flex flex-row justify-between items-center">
                    <div className="text-[#676767] flex flex-row gap-1 items-center">
                        <span className="text-[#006ECF]">{name}</span> / 
                        <span className="text-[#006ECF]">{number}</span>
                    </div>
                    <div className="flex flex-row gap-1 items-center">
                        <span className="text-black">{nationalCode}</span> / 
                        <span className="text-black">{insurance}</span>
                    </div>
                </div>
                <div className={`w-[60%] text-[14px] flex flex-row items-center md:pb-0 gap-1 text-[#676767] ${style}`}>
                    <div className="w-[78%] bg-[#efefef] h-10 py-2.5 px-3 rounded-[10px]">گرافی دست راست - ام آر آی تراسیک - سونو گرافی شکم و لگن</div>
                    <button type="button" onClick={() => getSelectedElem(status,true)} disabled={status == "پرداخت شده"} className={`w-[157px] ${statusClass} h-10 py-2.5 text-center rounded-[10px]`}>وضعیت : {status}</button>
                </div>
                <div className="w-[10%] flex flex-row gap-2 text-[14px] text-[#676767]">
                    <span>{time}</span>
                    <span>{date}</span>
                </div>
            </div>
        
        </>
    )
}