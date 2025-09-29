import classNames from "classnames"

export default function PatientItem({name, number, phoneNumber, province, city, status, getItemSelected}) {
    const statusClass = classNames({
        "text-[#FF9E33]": status == "غیر فعال",
        "text-[#006ECF]": status == "فعال"
    })
    return (
        <div className="w-full h-[70px] rounded-[20px] flex flex-row justify-between item-center vazir-medium text-[14px] text-[#676767] bg-white px-5">
            <div className="w-[46%] flex flex-row items-center justify-between">
                <div className="w-max flex flex-row gap-1">
                    <span className="text-[#006ecf]">{name}</span> / 
                    <span className="text-[#006ecf]">{number}</span>
                </div>
                <div className="w-max flex flex-row gap-1 items-center">تلفن : {phoneNumber}</div>
                <div className="w-max flex flex-row items-center gap-1">
                    <span>{province}</span> / 
                    <span>{city}</span>
                </div>
            </div>
            <div className="w-[37%] flex flex-row items-center justify-between">
                <div className="w-max flex flex-row gap-1">
                    <span>وضعیت : </span>
                    <span className={statusClass}>{status}</span>
                </div>
                <div className="w-max flex flex-row gap-2">
                    <button onClick={() => getItemSelected("pay")} className={"bg-[#efefef] rounded-[10px] w-24 h-10"}>ایجاد پرداخت</button>
                    <button onClick={() => getItemSelected("history")} className={"bg-[#efefef] rounded-[10px] w-24 h-10"}>سابقه</button>
                    <button onClick={() => getItemSelected("edit")} className={"bg-[#efefef] rounded-[10px] w-24 h-10"}>ویرایش</button>
                </div>
            </div>
        </div>
    )
}