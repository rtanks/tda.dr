import { useState } from "react";
import TestHeader from "../generalComponent/HeaderTest";
import PatientInfo from "../PatientInfo";
import { IoCloseCircleOutline } from "react-icons/io5";
import TestItem from "./TestItem";

export default function Test({goBack}) {
    return (
        <div className="w-full h-full bg-white absolute left-0 top-0 vazir-medium flex justify-center">
            <div className="w-[402px]">
                <TestHeader title={"ثبت پاراکلینیک"} onClick={() => goBack("", false)}/>
                <div className="w-[90%] mx-auto flex flex-col gap-2 pb-2">
                    <PatientInfo name={"اشکان حسنوندی"} phoneNumber={"09216919291"} time={"14:45"} date={"1404/12/01"} nationalCode={"4060405531"} insurance={"آزاد"}/>
                    <p className="w-full text-[14px] text-[#676767]">
                        موارد : گرافی دست راست - ام آر آی تراسیک - سونو گرافی شکم و لگن
                    </p>
                </div>
                <div className="w-full border-t-[6px] border-t-[#f5f5f5] px-5 pt-2 flex flex-col gap-2">
                    <TestItem test={"CBC"} value={"2.45"} active={true}/>
                    <TestItem test={"CBC"} value={"85"} active={false}/>
                    <TestItem test={"CBC"} value={"197"} active={true}/>
                    <TestItem test={"CBC"} value={"8.54"} active={true}/>
                </div>
                <div className="w-[402px] mx-auto fixed bottom-0 left-0 right-0 p-5">
                    <div className="w-full border-t border-t-[#eee] flex flex-row gap-2 p-5">
                        <input className="text-[#757575] text-[15px] border-0 outline-0" placeholder="میتوانید متنی وارد کنید"/>
                    </div>
                    <div className="w-full border-t border-t-[#eee] flex flex-row gap-2 p-5">
                        <button type="button" className="w-[178px] h-12 flex text-[15px] items-center justify-center rounded-[10px] border bg-transparent text-[#ff0000]">رد درخواست</button>
                        <button type="button" className="w-[178px] h-12 flex text-[15px] items-center justify-center rounded-[10px] bg-[#006ecf] text-white">انجام شد</button>
                    </div>
                </div>
            </div>
        </div>
    )
}