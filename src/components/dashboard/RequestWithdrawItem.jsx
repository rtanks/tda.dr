import {transformFormatWithSpreadEn} from "../../services/func/transformFunc"

export default function RequestWithdrawItem({name, expertise, nationalCode, province, city, price, time, date}) {
    return (
        <div className="w-full h-max flex flex-col bg-white gap-3 p-5 rounded-[20px] vazir-medium text-[14px] text-[#676767]">
            <div className="w-full h-max flex flex-row items-center justify-between">
                <div className="w-max flex flex-row items-center gap-1">
                    <span>{name}</span> /
                    <span>{expertise}</span> /
                    <span>{nationalCode}</span>
                </div>
                <div className="w-max flex flex-row items-center gap-1">
                    <span>{province}</span> /
                    <span>{city}</span>
                </div>
                <div className="w-max flex flex-row items-center gap-5">
                    <span>کیف پول : {transformFormatWithSpreadEn(price)} تومان</span>
                    <span>درخواست برداشت : {transformFormatWithSpreadEn(price)} تومان</span>
                </div>
                <div className="w-max flex flex-row items-center gap-2.5">
                    <span>{time}</span>
                    <span>{date}</span>
                </div>
            </div>
            <div className="w-full h-max flex flex-row items-center justify-between">
                <div className="w-[62%] p-2 border border-[#e9e9e9] rounded-[10px]">
                    <span>توضیحات : </span>
                </div>
                <div className="w-[37%] flex flex-row justify-between">
                    <div className="w-max flex flex-row gap-2">
                        <button type="button" className="w-[88px] h-10 border border-[#d9d9d9] rounded-[10px]">شماره پیگیری</button>
                        <button type="button" className="w-[88px] h-10 border border-[#d9d9d9] rounded-[10px]">سند تراکنش</button>
                    </div>
                    <div className="w-max flex flex-row gap-2">
                        <button type="button" className="w-[120px] h-10 flex items-center justify-center rounded-[10px] border bg-transparent text-[#ff0000]">تایید</button>
                        <button type="button" className="w-[120px] h-10 flex items-center justify-center rounded-[10px] bg-[#006ecf] text-white">رد</button>
                    </div>
                </div>
            </div>
        </div>
    )
}