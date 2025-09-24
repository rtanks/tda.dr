import TestHeader from "../generalComponent/HeaderTest";
import PatientInfo from "../PatientInfo";
import CreateDocumentItem from "./CreateDocumentItem";
import { transformFormat } from "../../services/func/transformFunc";
export default function CreateDocument({goBack}) {
    return (
         <div className="w-full h-full bg-white vazir-medium fixed left-0 top-0 z-50 overflow-y-scroll">
            <div className="w-[402px] mx-auto h-max">
                <TestHeader title={"پاراکلینیک"} onClick={() => goBack("", false)}/>
                <div className="w-[90%] mx-auto flex flex-col gap-2 pb-2">
                    <PatientInfo name={"اشکان حسنوندی"} phoneNumber={"09216919291"} time={"14:45"} date={"1404/12/01"} nationalCode={"4060405531"} insurance={"آزاد"}/>
                    <p className="w-full text-[14px] text-[#676767]">
                        موارد : گرافی دست راست - ام آر آی تراسیک - سونو گرافی شکم و لگن
                    </p>
                </div>
                <div className="w-full h-max border-t-[6px] border-t-[#f5f5f5] px-5 py-5 flex flex-col gap-5 mb-[40%]">
                    <div className="w-full text-[16px]">ایجاد</div>
                    <div className="w-full flex flex-row gap-2">
                        <CreateDocumentItem title={`ایجاد سند ${transformFormat(1)}`}/>
                        <CreateDocumentItem title={`ایجاد سند ${transformFormat(2)}`}/>
                        <CreateDocumentItem title={`ایجاد سند ${transformFormat(3)}`}/>
                    </div> 
                    <div className="w-full text-[16px]">ایجاد</div>
                    <div className="w-full flex flex-row gap-2">
                        <CreateDocumentItem title={`لینک ${transformFormat(1)}`}/>
                        <CreateDocumentItem title={`لینک ${transformFormat(2)}`}/>
                        <CreateDocumentItem title={`لینک ${transformFormat(3)}`}/>
                    </div>
                </div>
                <div className="w-[402px] mx-auto fixed bottom-0 left-0 right-0 px-5 bg-white">
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