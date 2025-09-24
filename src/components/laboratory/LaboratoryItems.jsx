import { transformFormatWithSpread } from "../../services/func/transformFunc";

export default function LaboratoryItems ({name, price, explain}) {
    return (
        <>
            <div className="w-full hidden text-[14px] text-black md:flex justify-between vazir-medium border-b border-b-[#e3e3e3] p-4">
                <span>نام : {name}</span>
                <div className="w-full md:w-[70%] md:h-6 overflow-hidden flex flex-row gap-1">
                    <span className="hidden md:inline">توضیحات : </span>
                    <span className="line-clamp-1">{explain}</span>
                    <span className="text-[#006ECF]">بیشتر</span>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <span>قیمت : </span>
                    <span>{transformFormatWithSpread(price)} تومان</span>
                </div>
                <button type="button" className="text-[#f00]">حذف</button>
            </div>
            
            <div className="w-full flex md:hidden flex-col text-[14px] gap-3 vazir-medium bg-[#f2f2f2] rounded-[15px] p-3">
                <div className="w-full flex flex-row items-center justify-between">
                    <div className="w-max flex flex-row items-center gap-1">
                        <span>{name}</span> / 
                        <span>{transformFormatWithSpread(price)} تومان</span>
                    </div>
                    <button type="button" className="text-[#f00]">حذف</button>
                </div>
                <div className="w-full flex flex-row flex-wrap">
                    <span className="hidden md:inline">توضیحات : </span>
                    <span className="line-clamp-2">{explain}</span>
                    <span className="text-[#006ECF]">بیشتر</span>
                </div>
            </div>
        </>
    )
}