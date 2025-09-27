import {BsCaretDown} from "react-icons/bs";
import { transformFormat } from "../../services/func/transformFunc";
import { useState } from "react";

export default function ProgressBar({getValue}) {
    const numberMarker = [5,10,20,30,40,50,60,70,80,90]
    const [value, setValue] = useState(0)
    const myProgress = (e) => {
        console.log(Math.ceil(e.nativeEvent.offsetX / 4) + "min")//time in minute
        setValue(e.nativeEvent.offsetX)
        getValue(Math.ceil(e.nativeEvent.offsetX / 4))
    }
    return (
        <div dir="ltr" className="w-[93%] h-16 mx-auto flex flex-col justify-center items-center">
            <div className="w-[360px] relative h-5 mb-0.5">
                <BsCaretDown size={24} className={`absolute top-0`} style={{left: value == 0? "-10px": `${value-13}px`}}/>
            </div>
            <div onClick={(e) => myProgress(e)} className="w-[360px] h-[5px] bg-gray-200 rounded-[10px] mb-1">
                <div className={`h-full bg-[#27C840] rounded-[10px]`} style={{width: `${value}px`}}></div>
            </div>
            <div className="w-full pl-1 flex flex-row justify-between text-[13px] text-[#676767]">
                {
                    numberMarker.map(num => <span key={num}>{transformFormat(num)}</span>)
                }
            </div>
        </div>
    )
}