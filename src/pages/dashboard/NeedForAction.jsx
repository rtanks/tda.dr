import UserItem from "../../components/dashboard/UserItem";
import Medicine from "./Medicine";
import ParaClinic from "./ParaClinic";
import TestRequest from "./TestRequest";
import Triage from "./Triage";
import { useState } from "react";
import SearchBoxWithBtn from "../../components/generalComponent/SearchBoxWithBtn";
import { PiPlus } from "react-icons/pi";
import { CgMenuRight } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { changeToggleMenuStatus } from "../../slices/statusMenuSlice";

export default function NeedForAction() {
  const [itemSelected, setItemSelected] = useState(null);
  const dispatch = useDispatch();
    const changeToggleStatus = () => {
      dispatch(changeToggleMenuStatus());
    };
  const getItemSelected = (item) => {
    setItemSelected(item)
  }
  const switchItems = () => {
    switch(itemSelected) {
      case "triage": return <Triage onClick={() => setItemSelected(null)}/>
      case "test": return <TestRequest onClick={() => setItemSelected(null)}/>
      case "medicine": return <Medicine onClick={() => setItemSelected(null)}/>
      case "paraClinic": return <ParaClinic onClick={() => setItemSelected(null)}/>
    }
  }
  return (
    <>
      {
        itemSelected == null ? (
          <>
            <SearchBoxWithBtn onClick1={() => changeToggleStatus()}>
              {{
                menu: <CgMenuRight size={24}/>,
                icon: <PiPlus size={24} />,
              }}
            </SearchBoxWithBtn>
            <div className="w-full h-max flex flex-col mt-5 gap-5 bg-transparent">
              <div className="w-full h-max flex flex-col gap-2">
                <UserItem
                  name={"اشکان حسنوندی"}
                  number={"325475"}
                  time={"14:45"}
                  date={"1404/12/01"}
                  style={"border-b md:border-0 border-b-[#e0e0e0]"}
                  getItemSelected={getItemSelected}
                />
                <UserItem
                  name={"اشکان حسنوندی"}
                  number={"6251478"}
                  time={"14:45"}
                  date={"1404/12/01"}
                  style={"border-b md:border-0 border-b-[#e0e0e0]"}
                  getItemSelected={getItemSelected}
                />
                <UserItem
                  name={"اشکان حسنوندی"}
                  number={"6255412"}
                  time={"14:45"}
                  date={"1404/12/01"}
                  getItemSelected={getItemSelected}
                />
              </div>
            </div>
          </>
        ) : (
          switchItems()
        )
      }
    </>
  );
}
