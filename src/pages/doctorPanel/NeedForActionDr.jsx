import { PiWatchLight } from "react-icons/pi";
import ActionItem from "../../components/doctorPanel/ActionItem";
import { useState } from "react";
import RecordMedicineRequest from "../actions/RecordMedicineRequest";
import RecordParaClinic from "../actions/RecordParaClinic";
import RecordTestRequest from "../actions/RecordTestRequest";
import InPersonConsultation from "../actions/InPersonConsultation";
import TextConsultation from "../actions/TextConsultation";
import EmergencyCall from "../actions/EmergencyCall";
import { useDispatch } from "react-redux";
import { changeShowNavbarStatus } from "../../slices/selectActionSlice";

export default function NeedForActionDr() {
    const [selectAction, setSelectAction] = useState({
        value: false,
        item: ""
    });
    const dispatch = useDispatch();

    const goBack = () => {
        setSelectAction({value: false, item: ""});
        dispatch(changeShowNavbarStatus({show: true}))
    }
    const selectActionItem = (item) => {
        setSelectAction({value: true, item: item})
        dispatch(changeShowNavbarStatus({show: false}))
    } 
    const viewElem = () => {
        switch(selectAction.item) {
            case "emergency": return <EmergencyCall goBack={goBack}/>
            // case "callTime": return ""
            // case "video": return ""
            case "text": return <TextConsultation goBack={goBack}/>
            case "inPerson": return <InPersonConsultation goBack={goBack}/>
            case "test": return <RecordTestRequest goBack={goBack}/>
            case "paraClinic": return <RecordParaClinic goBack={goBack}/>
            case "medicine": return <RecordMedicineRequest goBack={goBack}/>
        }
    }
    return(
        <div className="w-[90%] h-screen vazir-medium mt-10 mb-10 mx-auto flex flex-col gap-5 items-center">
            {
                selectAction.value ? (
                    viewElem()
                ) : (
                    <>
                        <div className="w-full h-7 flex flex-row justify-between items-center">
                            <span className="text-[16px]">نیاز به اقدام</span>
                            <PiWatchLight size={24} className="text-[#909090]"/>
                        </div>
                        <div className="w-full h-max flex flex-col py-5 gap-3 items-center">
                            <ActionItem onClick={() => selectActionItem("emergency")} action={"مشاوره تلفنی اورژانسی"} waitingTime={"1:12:36"} name={"اشکان حسنوندی"} nationalCode={"4060405531"} explain={" نمونه گیر ما در محل لوکیشن شما حضور پیدا کرده و بعد از دریافت نمونه به سرعت به آزمایشگاه "}/>
                            <ActionItem action={"مشاوره تلفنی زماندار"} waitingTime={"1:12:36"} name={"اشکان حسنوندی"} nationalCode={"4060405531"} explain={" نمونه گیر ما در محل لوکیشن شما حضور پیدا کرده و بعد از دریافت نمونه به سرعت به آزمایشگاه "}/>
                            <ActionItem action={"مشاوره تصویری"} waitingTime={"1:12:36"} name={"اشکان حسنوندی"} nationalCode={"4060405531"} explain={" نمونه گیر ما در محل لوکیشن شما حضور پیدا کرده و بعد از دریافت نمونه به سرعت به آزمایشگاه "}/>
                            {/* <ActionItem onClick={() => selectActionItem("callTime")} action={"مشاوره تلفنی زماندار"} waitingTime={"1:12:36"} name={"اشکان حسنوندی"} nationalCode={"4060405531"} explain={" نمونه گیر ما در محل لوکیشن شما حضور پیدا کرده و بعد از دریافت نمونه به سرعت به آزمایشگاه "}/>
                            <ActionItem onClick={() => selectActionItem("video")} action={"مشاوره تصویری"} waitingTime={"1:12:36"} name={"اشکان حسنوندی"} nationalCode={"4060405531"} explain={" نمونه گیر ما در محل لوکیشن شما حضور پیدا کرده و بعد از دریافت نمونه به سرعت به آزمایشگاه "}/> */}
                            <ActionItem onClick={() => selectActionItem("text")} action={"مشاوره متنی"} waitingTime={"1:12:36"} name={"اشکان حسنوندی"} nationalCode={"4060405531"} explain={" نمونه گیر ما در محل لوکیشن شما حضور پیدا کرده و بعد از دریافت نمونه به سرعت به آزمایشگاه "}/>
                            <ActionItem onClick={() => selectActionItem("inPerson")} action={"مشاوره حضوری"} waitingTime={"1:12:36"} name={"اشکان حسنوندی"} nationalCode={"4060405531"} explain={" نمونه گیر ما در محل لوکیشن شما حضور پیدا کرده و بعد از دریافت نمونه به سرعت به آزمایشگاه "}/>
                            <ActionItem onClick={() => selectActionItem("test")} action={"ثبت آزمایش"} waitingTime={"1:12:36"} name={"اشکان حسنوندی"} nationalCode={"4060405531"} explain={" نمونه گیر ما در محل لوکیشن شما حضور پیدا کرده و بعد از دریافت نمونه به سرعت به آزمایشگاه "}/>
                            <ActionItem onClick={() => selectActionItem("paraClinic")} action={"ثبت پاراکلنیک"} waitingTime={"1:12:36"} name={"اشکان حسنوندی"} nationalCode={"4060405531"} explain={" نمونه گیر ما در محل لوکیشن شما حضور پیدا کرده و بعد از دریافت نمونه به سرعت به آزمایشگاه "}/>
                            <ActionItem onClick={() => selectActionItem("medicine")} action={"ثبت دارو"} waitingTime={"1:12:36"} name={"اشکان حسنوندی"} nationalCode={"4060405531"} explain={" نمونه گیر ما در محل لوکیشن شما حضور پیدا کرده و بعد از دریافت نمونه به سرعت به آزمایشگاه "}/>
                        </div>
                    </>
                )
            }
        </div>
    )
}