import { useDispatch, useSelector } from "react-redux";
import TestHeader from "../generalComponent/HeaderTest";
import { isEmptyArray } from "../../services/func/requirementFunc";
import notFoundResult from "../../assets/images/notfoundresult.png";
import useCalender from "../../services/hooks/useCalender";
import { isEqual } from "lodash";
import { transformFormat } from "../../services/func/transformFunc";
import { useEffect, useState } from "react";
import { first } from "../../services/hooks/useCalender";
import { addInPersonTimeConsulting } from "../../slices/doctorSlice";


export default function InPersonSetting ({goBack,onClick}) {
    const turnTime = useSelector(state => state.doctor.consulting.inPerson);
    const {getDates} = useCalender();
    const dispatch =  useDispatch();
    const [dateSelected, setDateSelected] = useState(null);
    
    useEffect(() => {
        if(setDateSelected == null) {
            dispatch(addInPersonTimeConsulting({date: first, times: []}));
        } else {
            dispatch(addInPersonTimeConsulting({date: dateSelected, times: []}));
        }
    } , [setDateSelected])

    return (
        <div className="w-full h-full bg-white vazir-medium fixed left-0 top-0 z-50 overflow-y-scroll">
            <div className="w-[402px] h-[89%] mx-auto">
                <TestHeader title={"تنظیم نوبت دهی حضوری"} onClick={() => goBack()}/>
                <div className="w-[90%] h-max mx-auto flex flex-col gap-5">
                    <span className="text-[16px]">انتخاب تاریخ</span>
                    <div className="w-full h-[76px] mx-auto flex flex-row items-center justify-between bg-white pb-6">
                        {
                            getDates().map((date, index) => (
                                <div onClick={() => setDateSelected(date)} key={index}
                                className={`w-max flex flex-col rounded-[10px] items-center gap-[2px] justify-center py-1 px-4 text-[14px] 
                                ${ (dateSelected == null ? isEqual(first, date): isEqual(dateSelected, date)) ? "bg-[#e6f3ff] text-[#006ECF]": "text-[#b9b9b9] bg-white"}`}>
                                    <span>{date.weekDay}</span>
                                    <span>{transformFormat(`${date.year}/${date.month}/${date.day}`)}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
                
                <div className="w-full h-3/5 flex items-center justify-center">
                    <div className="w-max flex flex-col items-center gap-2">
                        <img src={notFoundResult} alt="not found result" width={121} height={117}/>
                        <span className="text-[14px] text-[#b9b9b9]">بازه های مشاوره خالیست</span>
                    </div>
                </div>
                <div className="w-[402px] border-t border-t-[#e9e9e9] bg-white p-5 mx-auto fixed bottom-0 left-0 right-0 flex flex-col items-center">
                    <button type="button" onClick={onClick} className="w-full h-12 flex text-[15px] items-center justify-center rounded-[10px] bg-[#006ecf] text-white">ایجاد بازه مشاوره</button>
                </div>
                        
                    
            </div>
        </div>
    )
}