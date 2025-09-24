import ActionItem from "../../components/laboratory/ActionItem";
import { useState } from "react";
import ParaClinic from "../../components/laboratory/ParaClinic";
import Test from "../../components/laboratory/Test";
import { PiWatchLight,PiPlus } from "react-icons/pi";
import SearchBoxWithoutMenu from "../../components/generalComponent/SearchBoxWithoutmenu";

export default function NeedForActionL() {
  const [select , setSelect] = useState({
    status: "",
    selected: false
  })
  const getSelectedElem = (status, selected) => {
    setSelect({status: status, selected: selected});
  }
  const showTargetPage = (status) => {
    switch(status){
        case "سند ایجاد نشده": return <ParaClinic goBack={getSelectedElem} />
        case "پرداخت نشده": return <Test goBack={getSelectedElem}/>
    }
  }
  return (
    <div className="w-[90%] mx-auto h-max flex flex-col mt-5 gap-5 vazir-medium bg-transparent">
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
              <ActionItem status={"سند ایجاد نشده"}
                name={"اشکان حسنوندی"}
                number={"325475"}
                time={"14:45"}
                date={"1404/12/01"}
                nationalCode={"4060405531"}
                insurance={"آزاد"}
                getSelectedElem={getSelectedElem}
                style={"border-b md:border-0 border-b-[#e0e0e0]"}
              />
              <ActionItem status={"پرداخت نشده"}
                name={"اشکان حسنوندی"}
                number={"6251478"}
                time={"14:45"}
                date={"1404/12/01"}
                nationalCode={"4060405531"}
                insurance={"آزاد"}
                getSelectedElem={getSelectedElem}
                style={"border-b md:border-0 border-b-[#e0e0e0]"}
              />
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
