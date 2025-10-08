import TestHeader from "../../components/generalComponent/HeaderTest";
import PatientInfo from "../../components/PatientInfo";

export default function InPersonRequest({goBack}) {

    return (
        <div className="w-full h-max vazir-medium">
            <TestHeader title={"مشاوره حضوری"} onClick={() => goBack()}/>
            <div className="w-[90%] mx-auto flex flex-col gap-2 pb-2">
                <PatientInfo name={"اشکان حسنوندی"} phoneNumber={"09216919291"} time={"14:45"} date={"1404/12/01"} nationalCode={"4060405531"} insurance={"آزاد"}/>
                <p className="w-full text-[#676767] text-[14px] p-1">توضیحات : نمونه گیر ما در محل لوکیشن شما حضور پیدا کرده و بعد از دریافت نمونه به سرعت به آزمایشگاه منتقل و جوابدهی خواهد شد و نتیجه در پرونده پزشکی اشکان حسنوندی درج میگردد .</p>
            </div>
            <div className="w-full bg-[#f5f5f5] pt-2">
                <div className="w-full bg-white px-5">
                    <p className="w-full text-[#676767] text-[14px] p-1">توضیحات : در صورتی که نیاز به ذکر موردی در پرونده پزشکی بیماردارید و یا موارد دیگر میتوانید متن ایجاد کنید .</p>
                </div>
            </div>
            <div className="w-full sm:w-[402px] mx-auto fixed bottom-0 left-0 right-0 p-5 flex flex-row gap-2 border-t border-t-[#eee]">
                <button type="button" className="w-[178px] h-12 flex text-[15px] items-center justify-center rounded-[10px] border bg-transparent text-[#ff0000]">رد درخواست</button>
                <button type="button" className="w-[178px] h-12 flex text-[15px] items-center justify-center rounded-[10px] bg-[#006ecf] text-white">انجام شد</button>
            </div>
        </div>
    )
}