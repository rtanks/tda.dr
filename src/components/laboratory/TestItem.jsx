import { transformFormat } from "../../services/func/transformFunc";

export default function TestItem({test, value, active}) {
    return (
        <div className="w-full flex flex-row justify-between items-center vazir-medium">
            <span className={`text-[15px] ${active ? "text-black" : "text-[#9d9d9d]"}`}>{test}</span>
            <span className="w-[134px] h-[46px] text-center py-3 text-[15px] text-[#757575] border border-[#e3e3e3] rounded-[15px]">{transformFormat(value)}</span>
        </div>
    )
}