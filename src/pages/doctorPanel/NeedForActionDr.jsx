import { PiWatchLight } from "react-icons/pi";
import ActionItem from "../../components/doctorPanel/ActionItem";

export default function NeedForActionDr() {
    return(
        <div className="w-[90%] vazir-medium mt-10 mb-16 mx-auto flex flex-col gap-5 items-center">
            <div className="w-full h-7 flex flex-row justify-between items-center">
                <span className="text-[16px]">نیاز به اقدام</span>
                <PiWatchLight size={24} className="text-[#909090]"/>
            </div>
            <div className="w-full h-max flex flex-col py-5 gap-3 items-center">
                <ActionItem action={"مشاوره تلفنی اورژانسی"} waitingTime={"1:12:36"} name={"اشکان حسنوندی"} nationalCode={"4060405531"} explain={" نمونه گیر ما در محل لوکیشن شما حضور پیدا کرده و بعد از دریافت نمونه به سرعت به آزمایشگاه "}/>
                <ActionItem action={"مشاوره تلفنی زماندار"} waitingTime={"1:12:36"} name={"اشکان حسنوندی"} nationalCode={"4060405531"} explain={" نمونه گیر ما در محل لوکیشن شما حضور پیدا کرده و بعد از دریافت نمونه به سرعت به آزمایشگاه "}/>
                <ActionItem action={"مشاوره تصویری"} waitingTime={"1:12:36"} name={"اشکان حسنوندی"} nationalCode={"4060405531"} explain={" نمونه گیر ما در محل لوکیشن شما حضور پیدا کرده و بعد از دریافت نمونه به سرعت به آزمایشگاه "}/>
                <ActionItem action={"مشاوره متنی"} waitingTime={"1:12:36"} name={"اشکان حسنوندی"} nationalCode={"4060405531"} explain={" نمونه گیر ما در محل لوکیشن شما حضور پیدا کرده و بعد از دریافت نمونه به سرعت به آزمایشگاه "}/>
                <ActionItem action={"مشاوره حضوری"} waitingTime={"1:12:36"} name={"اشکان حسنوندی"} nationalCode={"4060405531"} explain={" نمونه گیر ما در محل لوکیشن شما حضور پیدا کرده و بعد از دریافت نمونه به سرعت به آزمایشگاه "}/>
                <ActionItem action={"ثبت آزمایش"} waitingTime={"1:12:36"} name={"اشکان حسنوندی"} nationalCode={"4060405531"} explain={" نمونه گیر ما در محل لوکیشن شما حضور پیدا کرده و بعد از دریافت نمونه به سرعت به آزمایشگاه "}/>
                <ActionItem action={"ثبت پاراکلنیک"} waitingTime={"1:12:36"} name={"اشکان حسنوندی"} nationalCode={"4060405531"} explain={" نمونه گیر ما در محل لوکیشن شما حضور پیدا کرده و بعد از دریافت نمونه به سرعت به آزمایشگاه "}/>
                <ActionItem action={"ثبت دارو"} waitingTime={"1:12:36"} name={"اشکان حسنوندی"} nationalCode={"4060405531"} explain={" نمونه گیر ما در محل لوکیشن شما حضور پیدا کرده و بعد از دریافت نمونه به سرعت به آزمایشگاه "}/>
            </div>
        </div>
    )
}