import TestHeader from "../../components/generalComponent/HeaderTest";
import PatientInfo from "../../components/PatientInfo";

export default function EmergencyCall({goBack}) {
    
    return (
        <div className="w-full h-max vazir-medium">
            <TestHeader title={"مشاوره تلفنی اورژانسی"} onClick={() => goBack()}/>
            <div className="w-full h-full px-5 pb-2 vazir-medium">
                <PatientInfo name={"اشکان حسنوندی"} phoneNumber={"09216919291"} time={"14:45"} date={"1404/12/01"} nationalCode={"4060405531"} insurance={"آزاد"}/>
                <p className="w-full text-[#676767] text-[14px] p-1">توضیحات : نمونه گیر ما در محل لوکیشن شما حضور پیدا کرده و بعد از دریافت نمونه به سرعت به آزمایشگاه منتقل و جوابدهی خواهد شد و نتیجه در پرونده پزشکی اشکان حسنوندی درج میگردد .</p>
            </div>
            <div className="w-full sm:w-[402px] mx-auto fixed bottom-0 left-0 right-0 flex flex-col items-center">
                <button type="button" onClick={() => window.location.href="tel:09216919291"} className="w-[90%] h-12 flex text-[15px] items-center justify-center rounded-[10px] bg-[#006ecf] text-white">تماس با / ۰۹۲۱۶۹۱۹۲۹۱</button>
                <div className="w-full border-t border-t-[#eee] p-5 flex flex-row gap-2">
                    <button type="button" className="w-[178px] h-12 flex text-[15px] items-center justify-center rounded-[10px] border bg-transparent text-[#ff0000]">رد درخواست</button>
                    <button type="button" className="w-[178px] h-12 flex text-[15px] items-center justify-center rounded-[10px] bg-[#006ecf] text-white">انجام شد</button>
                </div>
            </div>
        </div>
    )
}