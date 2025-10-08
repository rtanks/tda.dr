import LogoApp from "../components/logoApp";
import LoginAppTitle from "../components/LoginAppTitle";
import Input from "../components/generalComponent/Input";
import SubmitButton from "../components/generalComponent/SubmitButton";
import classNames from "classnames";
import UserRole from "../components/UserRole";
import { useNavigate } from "react-router-dom";
// import loginService from "../services/api/loginService";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  role: z.string().nonempty("وارد کردن این فیلد الزامی است"),
  nationalCode: z.string().nonempty("وارد کردن این فیلد الزامی است").max(10, "کد ملی وارد شده معتبر نیست").min(10, "کد ملی وارد شده معتبر نیست"),
  password: z.string().nonempty("وارد کردن این فیلد الزامی است")
})

export default function Login() {
  // const {loginMutation} = loginService()
  const navigate = useNavigate();
  
  const {register, setValue, handleSubmit, formState: {errors, isValid}} = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues:{
      role: "",
      nationalCode: "",
      password: ""
    }
  })
  const disabledClass = classNames({
    "bg-[#006ECF] text-white": isValid,
    "bg-gray-200 text-gray-500": !isValid,
  });
  const getRole = (role) => {
    setValue("role", role)
  }

  const onSubmit = (data) => {
    console.log(data)
    navigate("/doctor/need-for-action")
  }
  return (
    <div className="w-[90%] mt-10 mx-auto flex flex-col items-center">
      <LogoApp />
      <LoginAppTitle />
      <div className="w-full mt-12 vazir-medium text-right font-semibold text-lg text-[16px]">ورود کاربر خاص (-:</div>

      <UserRole getRole={getRole}/>
      {errors.role && <p className="text-red-500 text-sm">{errors.role.message}</p>}
      <form onSubmit={handleSubmit(onSubmit)}  className="w-full h-max">
        <Input register={register("nationalCode")} type={"text"} placeholder={"کدملی"} mode={"numeric"}/>
        {errors.nationalCode && <p className="text-red-500 text-sm">{errors.nationalCode.message}</p>}
        <Input register={register("password")} type={"password"} placeholder={"رمز عبور"}/>
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        <SubmitButton title={"ورود"} additionalStyle={`${disabledClass} mt-6`}/>
      </form>

      <div className="w-full h-max mb-14 vazir-medium flex flex-col gap-2 text-[16px] mt-[32px] text-gray-500">
        <div className="w-full h-10 flex flex-row justify-between items-center">
          <span>رمز ندارم / بازیابی رمز عبور</span>
          <button type="button" onClick={() => {navigate("/retrieve-password"); localStorage.setItem("counter", 120)}} className="w-[84px] h-full bg-gray-200 rounded-[10px]">
            شروع
          </button>
        </div>
        <div className="w-full h-10 flex flex-row justify-between items-center">
          <span>تماس با پشتیبانی</span>
          <button
            type="button"
            className="w-[84px] h-full bg-gray-200 rounded-[10px]"
          >
            تماس
          </button>
        </div>
      </div>
    </div>
  );
}
