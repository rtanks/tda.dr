import TestHeader from "../generalComponent/HeaderTest";
import InputWithLabel from "../generalComponent/InputWithLabel";
import SubmitButton from "../generalComponent/SubmitButton";
import TextAreaWithLabel from "../generalComponent/TextAreaWithLabel";

export default function PatientEdit({onClick}) {
    return (
        <div className="w-full h-full bg-white vazir-medium fixed left-0 top-0 z-50 overflow-y-scroll">
            <div className="w-[402px] mx-auto">
                <TestHeader title={"ویرایش کاربر"} onClick={onClick}/>
                <div className="w-[90%] h-max mx-auto flex flex-col gap-6 mb-5">
                    <div className="flex flex-row items-center gap-[14px]">
                        <div className="w-[62px] h-[62px] text-xs bg-[#d9d9d9] rounded-full"></div>
                        <span className="text-[16px] text-[#5f5f5f]">تصویر پروفایل</span>
                    </div>
                    <InputWithLabel label={"نام و نام خانوادگی"} type={"text"} />
                    <InputWithLabel label={"شماره همراه"} type={"text"} />
                    <InputWithLabel label={"کدملی"} type={"text"} />
                    <TextAreaWithLabel label={"درباره من "} type={"text"} styleI={"w-[361px] h-[212px]"}/>
                    <SubmitButton title={"ثبت اطلاعات"} additionalStyle={"bg-[#E9E9E9] text-[#676767] border-none"} disabled={false}/>
                </div>
            </div>
        </div>
    )
}