import { useForm } from "react-hook-form";
import TestHeader from "../generalComponent/HeaderTest";
import InputWithLabel from "../generalComponent/InputWithLabel";
import SubmitButton from "../generalComponent/SubmitButton";
import TextAreaWithLabel from "../generalComponent/TextAreaWithLabel";
import z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import classNames from "classnames";
import recordDoctorService from "../../services/api/recordDoctorService";

const schema = z.object({
    fullName: z.string().nonempty("وارد کردن این فیلد الزامی است"),
    phoneNumber: z.string().nonempty("وارد کردن این فیلد الزامی است").regex(/^09\d{9}$/, "شماره تلفن وارد شده معتبر نیست"),
    nationalCode: z.string().nonempty("وارد کردن این فیلد الزامی است").max(10, "کد ملی وارد شده معتبر نیست").min(10, "کد ملی وارد شده معتبر نیست")
});

export default function RecordDoctorUser({onClick}) {
    // const {recordDoctorMutation} = recordDoctorService();
    const {register, handleSubmit, formState: {errors, isValid}} = useForm({
        resolver: zodResolver(schema),
        mode: "onChange",
        defaultValues: {
            fullName: "",
            phoneNumber: "",
            nationalCode: ""
        }
    })
    const disabledClass = classNames({
        "bg-[#006ECF] text-white border-none": isValid,
        "bg-gray-200 text-gray-500 border-none": !isValid,
      });
    const onSubmit = (data) => {
        console.log(data)
        // recordDoctorMutation.mutate(data)
    }
    return (
        <div className="w-full h-full bg-white vazir-medium fixed left-0 top-0 z-50 overflow-y-scroll">
            <div className="w-[402px] mx-auto">
                <TestHeader title={"ثبت کاربر"} onClick={onClick}/>
                <form onSubmit={handleSubmit(onSubmit)} className="w-[90%] h-max mx-auto flex flex-col gap-6 mb-5">
                    <div className="flex flex-row items-center gap-[14px]">
                        <div className="w-[62px] h-[62px] text-xs bg-[#d9d9d9] rounded-full"></div>
                        <span className="text-[16px] text-[#5f5f5f]">تصویر پروفایل</span>
                    </div>
                    <InputWithLabel register={register("fullName")} label={"نام و نام خانوادگی"} type={"text"} />
                    {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
                    <InputWithLabel register={register("phoneNumber")} label={"شماره همراه"} type={"text"} />
                    {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}
                    <InputWithLabel register={register("nationalCode")} label={"کد ملی"} type={"text"} />
                    {errors.nationalCode && <p className="text-red-500 text-sm">{errors.nationalCode.message}</p>}

                    <InputWithLabel label={"شماره نظام پزشکی / روانشناسی"} type={"text"} />
                    <InputWithLabel label={"فوق تخصص / فلوشیپ"} type={"text"} />
                    <InputWithLabel label={"تخصص"} type={"text"} />
                    <InputWithLabel label={"استان"} type={"text"} />
                    <InputWithLabel label={"شهر"} type={"text"} />
                    <InputWithLabel label={"سال آخرین فارغ التحصیلی"} type={"text"} />
                    <InputWithLabel label={"آخرین دانشگاه محل تحصیل"} type={"text"} />
                    <TextAreaWithLabel label={"درباره من "} type={"text"} styleI={"w-[361px] h-[241px]"}/>
                    <SubmitButton title={"ثبت اطلاعات"} additionalStyle={`${disabledClass}`}/>
                </form>
            </div>
        </div>
    )
}