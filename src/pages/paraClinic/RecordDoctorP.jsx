import { useState } from "react";
import RecordDoctorItem from "../../components/dashboard/RecordDoctorItem";
import UserEdit from "../../components/UserEdit";
import RecordUser from "../../components/RecordUser";
import SearchBoxWithBtn from "../../components/generalComponent/SearchBoxWithBtn";
import { PiPlus } from "react-icons/pi";
import { CgMenuRight } from "react-icons/cg";

export default function RecordDoctorP() {
  const [itemSelected, setItemSelected] = useState(null);
  const getItemSelected = (item) => {
    setItemSelected(item)
  }
  const switchItems = () => {
    switch(itemSelected) {
      case "edit": return <UserEdit onClick={() => setItemSelected(null)}/>
      case "record": return <RecordUser onClick={() => setItemSelected(null)}/>
    }
  }
  return (
    <>
      {
        itemSelected == null ? (
          <>
            <SearchBoxWithBtn onClick2={() => getItemSelected("record")}>
              {{
                menu: <CgMenuRight size={24}/>,
                icon: <PiPlus size={24} />,
              }}
            </SearchBoxWithBtn>
            <div className="w-full h-max flex flex-col mt-5 gap-5 bg-transparent">
              <div className="w-full h-max flex flex-col gap-2">
                <RecordDoctorItem name={"1-اشکان حسنوندی"} number={"415241"} expertise={"متخصص جراحی عمومی"} phoneNumber={"09216919291"} province={"لرستان"} city={"خرم آباد"} status={"فعال"} getItemSelected={getItemSelected}/>
                <RecordDoctorItem name={"2-اشکان حسنوندی"} number={"415241"} expertise={"متخصص جراحی عمومی"} phoneNumber={"09216919291"} province={"لرستان"} city={"خرم آباد"} status={"غیر فعال"} getItemSelected={getItemSelected}/>
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
