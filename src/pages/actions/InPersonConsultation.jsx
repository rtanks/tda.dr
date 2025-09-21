import TestHeader from "../../components/generalComponent/HeaderTest"
import useCalender from "../../services/hooks/useCalender";
import { isEqual } from "lodash";
import {transformFormat} from '../../services/func/transformFunc'
import { useDispatch, useSelector } from "react-redux";
import {getFirstTime} from "../../slices/inPersonSlice.js"
import AddTime from "../../components/actions/AddTime.jsx";
import { useState } from "react";
import InPersonRequest from "./InPersonRequest.jsx";

export default function InPersonConsultation({goBack}) {
    const {getDates} = useCalender();
    const dispatch =  useDispatch();
    const dateSelected = useSelector(state => state.inPerson.firstTime);
    const times = useSelector(state => state.inPerson.times);
    const [goNext, setGoNext] = useState(false);
    // const targetTimes = () => {

    // }
    const changeGoNext = () => {
        setGoNext(prev => !prev)
    }
    
    return (
            <div className="w-full h-full bg-white">
            { goNext ? (
                <InPersonRequest goBack={changeGoNext}/>
            ) : (
            <>
                <TestHeader title={"مشاوره حضوری"} onClick={() => goBack()}/>
                <div className="w-full vazir-medium h-max">
                    <div className="w-[90%] mx-auto text-black text-[16px] mb-5">انتخاب تاریخ</div>
                    <div className="w-[90%] h-[76px] mx-auto flex flex-row items-center justify-between bg-white pb-6">
                        {
                            getDates().map((date, index) => (
                                <div onClick={() => dispatch(getFirstTime(date))} key={index}
                                className={`w-max flex flex-col rounded-[10px] items-center gap-[2px] justify-center py-1 px-4 text-[14px] ${isEqual(dateSelected, date) ? "bg-[#e6f3ff] text-[#006ECF]": "text-[#b9b9b9] bg-white"}`}>
                                    <span>{date.weekDay}</span>
                                    <span>{transformFormat(date.year)}/{transformFormat(date.month)}/{transformFormat(date.day)}</span>
                                </div>
                            ))
                        }
                    </div>
                    <div className="w-full h-max bg-[#f5f5f5] flex flex-col gap-2">
                        <AddTime goTo={changeGoNext} title={"صبح"} times={times.filter(time => time.time == "morning")}/>
                        <AddTime goTo={changeGoNext} title={"ظهر"} times={times.filter(time => time.time == "noon")}/>
                        <AddTime goTo={changeGoNext} title={"عصر"} times={times.filter(time => time.time == "afternoon")}/>
                    </div>
                </div> 
            </>
            )
            }
        </div>
    )
}