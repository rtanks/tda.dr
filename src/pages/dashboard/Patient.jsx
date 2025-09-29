import { useState } from "react";
import SearchBoxWithBtn from "../../components/generalComponent/SearchBoxWithBtn";
import { PiPlus } from "react-icons/pi";
import { CgMenuRight } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { changeToggleMenuStatus } from "../../slices/statusMenuSlice";
import PatientItem from "../../components/dashboard/PatientItem";
import CreatePayDoc from "../../components/dashboard/CreatePayDoc";
import PatientEdit from "../../components/dashboard/PatientEdit";
import PatientCreate from "../../components/dashboard/PatientCreate";
import History from "../../components/dashboard/History";

export default function Patient() {
  const [itemSelected, setItemSelected] = useState(null);
  const getItemSelected = (item) => {
    setItemSelected(item)
  }
  const dispatch = useDispatch();
  const changeToggleStatus = () => {
    dispatch(changeToggleMenuStatus());
  };
  const switchItems = () => {
    switch(itemSelected) {
      case "edit": return <PatientEdit onClick={() => setItemSelected(null)}/>
      case "pay": return <CreatePayDoc onClick={() => setItemSelected(null)}/>
      case "history": return <History onClick={() => setItemSelected(null)}/>
      case "create": return <PatientCreate onClick={() => setItemSelected(null)}/>
    }
  }
  return (
    <>
      {
        itemSelected == null ? (
          <>
            <SearchBoxWithBtn onClick1={() => changeToggleStatus()} onClick2={() => getItemSelected("create")}>
              {{
                menu: <CgMenuRight size={24}/>,
                icon: <PiPlus size={24} />,
              }}
            </SearchBoxWithBtn>
            <div className="w-full h-max flex flex-col mt-5 gap-5 bg-transparent">
              <div className="w-full h-max flex flex-col gap-2">
                <PatientItem name={"1-اشکان حسنوندی"} number={"415241"} phoneNumber={"09216919291"} province={"لرستان"} city={"خرم آباد"} status={"فعال"} getItemSelected={getItemSelected}/>
                <PatientItem name={"2-اشکان حسنوندی"} number={"415241"} phoneNumber={"09216919291"} province={"لرستان"} city={"خرم آباد"} status={"فعال"} getItemSelected={getItemSelected}/>
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
