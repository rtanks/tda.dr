import { useState } from "react";
import DoctorInformation from "../../components/laboratory/DoctorInformation";
import classNames from "classnames";
import LaboratoryItem from "../../components/laboratory/LaboratoryItem";
import PackageItem from "../../components/laboratory/PackageItem";

export default function ServiceDeskP() {
  const [active, setActive] = useState({ package: false, laboratory: true });
  const changeActiveElem = (status) => {
    return classNames({
      "text-[#006ECF] border-b-[3px] border-b-[#006ECF]": status,
      "text-[#909090]": !status,
    });
  };
  
  return (
    <div className="w-[90%] md:w-[95%] p-0 md:p-5 mt-10 vazir-medium rounded-lg mx-auto flex flex-col gap-7 items-center bg-white">
      <DoctorInformation />
      <div className="w-full h-10 flex flex-row gap-5 px-5 border-b border-b-gray-200">
        <div onClick={() => setActive({ package: false, laboratory: true })}
          className={`w-[95px] hover:cursor-pointer h-[40.2px] flex items-center justify-center text-[15px] ${changeActiveElem(active.laboratory)}`}>آزمایشات</div>
        <div onClick={() => setActive({ package: true, laboratory: false })}
          className={`w-[95px] hover:cursor-pointer h-[40.2px] flex items-center justify-center text-[15px] ${changeActiveElem(active.package)}`}>پکیج</div>
      </div>
      <div className="w-full h-max">
        {active.laboratory ? (
          <LaboratoryItem />
        ) : (
          <PackageItem />
        )}
      </div>
    </div>
  );
}
