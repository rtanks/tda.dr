import classNames from "classnames";
import { LuCircle, LuCircleCheckBig } from "react-icons/lu";

export default function SelectItem({selectItem,onClick, title, status, doneStatus}) {
    const statusClass = classNames({
        "bg-[#CDF2D3] text-[#00C313]": (status == "complete") ? true : false,
        "bg-[#E6F3FF] text-[#006ECF]": (selectItem == title && status != "complete") ? true : false,
        "bg-[#efefef] text-[#898989]": (status == "incomplete" && !(selectItem == title ? true : false)) ? true : false
    })
    return(
        <div onClick={() => onClick(title)}
            className={`w-max px-[10px] py-[7px] vazir-medium flex flex-row justify-center items-center gap-[5px] text-[14px] rounded-[10px] ${statusClass}`}>
            {(status == "complete" ? true : false) ? (doneStatus ? <LuCircleCheckBig size={15}/>: <LuCircle size={15}/>) : <LuCircle size={15}/>}
            {title}
        </div>
    )
}