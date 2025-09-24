import ActionItem from "../../components/paraClinicMani/ActionItem";
import { useState } from "react";
import ParaClinic from "../../components/paraClinicMani/ParaClinic";
import { PiWatchLight,PiPlus } from "react-icons/pi";
import SearchBoxWithoutMenu from "../../components/generalComponent/SearchBoxWithoutmenu";
import CreateDocument from "../../components/paraClinicMani/CreateDocument";

export default function NeedForActionP() {
  const [select , setSelect] = useState({
    status: "",
    selected: false
  })

  const getSelectedElem = (status, selected) => {
    setSelect({status: status, selected: selected});
  }
  const showTargetPage = (status) => {
    switch(status){
        case "سند ایجاد نشده": return <CreateDocument goBack={getSelectedElem} />
        case "پرداخت نشده": return <ParaClinic goBack={getSelectedElem}/>
    }
  }
  return (
    <div className="w-[90%] md:w-[97%] mx-auto h-max flex flex-col mt-5 gap-5 vazir-medium bg-transparent">
      {
        select.selected ? (
          showTargetPage(select.status)
        ) : (
          <>
            <SearchBoxWithoutMenu>
              <PiPlus size={24} />
            </SearchBoxWithoutMenu>
            <div className="w-[90%] mx-auto h-7 flex md:hidden flex-row justify-between items-center">
                <span className="text-[16px]">نیاز به اقدام</span>
                <PiWatchLight size={24} className="text-[#909090]"/>
            </div>
            <div className="w-full h-max flex flex-col gap-2">
              <ActionItem status={"پرداخت شده"}
                name={"اشکان حسنوندی"}
                number={"6255412"}
                time={"14:45"}
                date={"1404/12/01"}
                nationalCode={"4060405531"}
                insurance={"آزاد"}
                getSelectedElem={getSelectedElem}
              />
              <ActionItem status={"پرداخت نشده"}
                name={"اشکان حسنوندی"}
                number={"6255412"}
                time={"14:45"}
                date={"1404/12/01"}
                nationalCode={"4060405531"}
                insurance={"آزاد"}
                getSelectedElem={getSelectedElem}
              />
            </div>
          </>
        )
      }
    </div>
  );
}
