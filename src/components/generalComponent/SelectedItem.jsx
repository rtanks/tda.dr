import { useState } from "react";
import { LuCircle, LuCircleCheckBig } from "react-icons/lu";

export default function SelectedItem({select, title, text, changeCompleteStatus, changeDoneStatus}) {
    const [selected, setSelected] = useState(select);
    const [itemDone, setItemDone] = useState(false);

    return(
        <div className="w-full h-max vazir-medium flex flex-row justify-between items-center">
            <div onClick={() => {setSelected(prev => !prev); changeCompleteStatus();}} className="flex flex-row items-center gap-[14px]">
                {selected ? <LuCircleCheckBig size={24} className="text-[#006ECF]"/> : <LuCircle size={24} className="text-[#d7d7d7]"/>}
                <div className="flex flex-col">
                    <span className="text-[15px] text-black">{title}</span>
                    <span className="text-[13px] text-[#878787]">{text}</span>
                </div>
            </div>
            {
                selected ? (
                    <div onClick={() => {setItemDone(prev => !prev); changeDoneStatus(!itemDone)}} className={`w-[84px] h-[40px] flex justify-center items-center text-[16px] rounded-[10px] ${itemDone ? "bg-[#CDF2D3] text-[#00C313]" : "bg-[#D9D9D9] text-[#676767]"}`}>
                        انجام شد
                    </div> ) : ""
            }
        </div>
    )
}

