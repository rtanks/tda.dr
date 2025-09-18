import { useNavigate } from "react-router-dom";
import PatientInfo from "../components/PatientInfo";
import TestHeader from "../components/generalComponent/HeaderTest";

export default function Teriage() {
  const navigate = useNavigate();

  return (
    <>
      <TestHeader
        title={"تریاژ"}
        onClick={() => navigate("/dashboard/need-for-action")}
      />
      <div className="w-[90%] mt-10 mx-auto flex flex-col gap-5 items-center">
        <PatientInfo
          name={"اشکان حسنوندی"}
          phoneNumber={"09216919291"}
          time={"14:45"}
          date={"1404/12/01"}
          nationalCode={"4060405531"}
          insurance={"آزاد"}
        />
        <p className="w-[360px] h-[128px] p-4 rounded-[20px] text-[14px] text-[#676767] bg-[#f7f7f7]">
          توضیحات بیمار :من مسبیز عسثبت تثقصخه3عض کم-ا=تهقتنن 0ه9ضصثن09
          00نضث-ئش9پن9 9نت9ض2تپست9ت 9 ت9 تئ90ثت29ضتص0شسیتطتئ 90تقنضص39شثتنظ9ت
          ئ9ض3قتش0ب9پزتط089ت 99
        </p>
      </div>
    </>
  );
}
