import LogoApp from "../components/logoApp";
import LoginAppTitle from "../components/LoginAppTitle";
import Input from "../components/generalComponent/Input";
import SubmitButton from "../components/generalComponent/SubmitButton";
import classNames from "classnames";
import useSpecialLoginServices from "../services/hooks/useSpecialLoginServices";
import UserRole from "../components/UserRole";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { disabledChecker, checkNationalCode, checkEmptyPassword } =
    useSpecialLoginServices();
  const navigate = useNavigate();

  const disabledClass = classNames({
    "bg-[#006ECF] text-white": disabledChecker(),
    "bg-gray-200 text-gray-500": !disabledChecker(),
  });
  return (
    <div className="w-[90%] mt-10 mx-auto flex flex-col items-center">
      <LogoApp />
      <LoginAppTitle />
      <div className="w-full mt-12 vazir-medium text-right font-semibold text-lg text-[16px]">
        ورود کاربر خاص (-:
      </div>
      <UserRole />
      <form className="w-full h-max">
        <Input
          type={"text"}
          placeholder={"کدملی"}
          mode={"numeric"}
          onChange={(e) => checkNationalCode(e)}
        />
        <Input
          type={"text"}
          placeholder={"رمز عبور"}
          onChange={(e) => checkEmptyPassword(e)}
        />
        <SubmitButton
          title={"ورود"} onClick={() => navigate("/account")}
          additionalStyle={`${disabledClass} mt-6`}
          disabled={disabledChecker()}
        />
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
