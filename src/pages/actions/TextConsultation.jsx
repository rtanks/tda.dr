import TestHeader from "../../components/generalComponent/HeaderTest";
import PatientInfo from "../../components/PatientInfo"
import { LuArrowUp } from "react-icons/lu";
import { useState } from "react";
import {transformFormat} from "../../services/func/transformFunc"

export default function TextConsultation({goBack}) {
    const [textType, setTextType] = useState("");

    const [text,setText] = useState([
        {title: "own", time: "۱۲:۴۵", text: "سلام سوال کاربر"},
    ])

    const getTextInput = (e) => {
        setTextType(e.target.value);
    }
    const addToChat = (title, time, textInp) => {
        setTextType("")
        setText(prev => [...prev, {title: title, text: textInp, time: time}])
    }
    const getTime = () => {
        const dateNow = new Date();
        console.log(transformFormat(`${dateNow.getHours()}:${dateNow.getMinutes()}`))
        return transformFormat(`${dateNow.getHours()}:${dateNow.getMinutes()}`)
    } 
    return (
        <div className="w-full overflow-y-scroll vazir-medium">
            <TestHeader title={"مشاوره متنی"} onClick={() => goBack()}/>
            <div className="w-[90%] mx-auto pb-2">
                <PatientInfo name={"اشکان حسنوندی"} phoneNumber={"09216919291"} time={"14:45"} date={"1404/12/01"} nationalCode={"4060405531"} insurance={"آزاد"}/>
                <p className="w-full text-[#676767] text-[14px] p-1">توضیحات : نمونه گیر ما در محل لوکیشن شما حضور پیدا کرده و بعد از دریافت نمونه به سرعت به آزمایشگاه منتقل و جوابدهی خواهد شد و نتیجه در پرونده پزشکی اشکان حسنوندی درج میگردد .</p>
            </div>
            <div className="w-full border-t-8 border-t-[#f5f5f5] text-[14px] p-5">
                <div className="w-full text-center text-[#006ECF] mb-3">یک شنبه 26 مهر 1404</div>
                <p className="text-[#676767]">متن پزشکبسجحم.چشم.چجچسیب حم.جحزنح خن حخنحخ حخ حخ حخن حخن حخ نحخ ن حخن حخن حخن حخ نحخ ن حخئن هخت 7876 ق45 ی 5 7ات هخ حم حخ  76ب 45ی 6  هنم</p>
                <div className="w-full h-max flex flex-col gap-2">
                    <div className="w-full h-max text-[#414141] text-[12px] mt-4 flex flex-col gap-2 mb-34">
                        {
                            text.map((textItem, index)=> (
                                <div key={index} className={`w-full h-max flex flex-row ${textItem.title == "user" ? "justify-start" : " justify-end"}`}>
                                    <div className={`w-[90%] h-max flex flex-col rounded-[20px] p-4
                                    ${textItem.title == "user" ? "bg-white" : "bg-[#f4f4f4]"}`}>
                                        <div>{textItem.text}</div>
                                        <div className={`w-full ${textItem.title == "user" ? "text-right" : "text-left"}`}>{textItem.time}</div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div> 
            <div className="w-full sm:w-[402px] mx-auto fixed bottom-0 left-0 right-0 flex flex-col items-center bg-white">
                <div className="w-full h-14 flex flex-row items-center border-t border-t-[#eee] py-2.5 px-5">
                    <input onChange={(e) => getTextInput(e)} type="text" className="w-[85%] h-full border-0 outline-0 placeholder:text-[15px] placeholder:text-[#757575]" placeholder="تایپ کنید"/>
                    <button onClick={() => addToChat("user", getTime(), textType)} className="w-[15%] h-full pr-4 border-r border-r-[#e2e2e2]">
                        <LuArrowUp size={30} className="text-[#949494]"/>
                    </button>
                </div>
                <div className="w-full border-t border-t-[#eee] p-4 flex flex-row gap-2">
                    <button type="button" className="w-[178px] h-12 flex text-[15px] items-center justify-center rounded-[10px] border bg-transparent text-[#ff0000]">رد درخواست</button>
                    <button type="button" className="w-[178px] h-12 flex text-[15px] items-center justify-center rounded-[10px] bg-[#006ecf] text-white">انجام شد</button>
                </div>
            </div>               
        </div>
    )
}