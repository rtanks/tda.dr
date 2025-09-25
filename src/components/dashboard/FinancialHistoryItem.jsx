export default function FinancialHistoryItem ({name, expertise, nationalCode, province, city, shaba, number, onClick}) {
    return (
        <div className="w-full h-max bg-white p-5 rounded-[20px] flex flex-row items-center justify-between vazir-medium text-[14px] text-[#676767]">
            <div className="w-max flex flex-row items-center gap-1">
                <span>{name}</span> /
                <span>{expertise}</span> /
                <span>{nationalCode}</span>
            </div>
            <div className="w-max flex flex-row items-center gap-1">
                <span>{province}</span> /
                <span>{city}</span>
            </div>
            <span>شبا : {shaba}</span>
            <div className="w-max flex flex-row items-center gap-2">
                <span className="px-5">{number} تراکنش</span>
                <button type="button" onClick={onClick} className="w-24 h-10 bg-gray-200 rounded-[10px]">سابقه</button>    
            </div>
        </div>
    )
}