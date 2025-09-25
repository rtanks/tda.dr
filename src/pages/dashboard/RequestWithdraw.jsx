import { useState } from "react";
import RequestWithdrawItem from "../../components/dashboard/RequestWithdrawItem";
import CreateWithdraw from "../../components/dashboard/CreateWithdraw";
import SearchBoxWithBtn from "../../components/generalComponent/SearchBoxWithBtn";
import { PiPlus } from "react-icons/pi";
import { CgMenuRight } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { changeToggleMenuStatus } from "../../slices/statusMenuSlice";

export default function RequestWithdraw() {
    const [itemSelected, setItemSelected] = useState(null);
    const dispatch = useDispatch();
    const getItemSelected = (item) => {
      setItemSelected(item)
    }
    const changeToggleStatus = () => {
      dispatch(changeToggleMenuStatus());
    };
    
    return (
      <>
      <SearchBoxWithBtn onClick1={() => changeToggleStatus()} onClick2={() => getItemSelected("hi")}>
        {{
          menu: <CgMenuRight size={24}/>,
          icon: <PiPlus size={24} />,
        }}
      </SearchBoxWithBtn>
        <div className="w-full h-max flex flex-col mt-5 gap-5 bg-transparent">
          <div className="w-full h-max flex flex-col gap-4">
            <RequestWithdrawItem name={"اشکان حسنوندی"} expertise={"متخصص جراحی عمومی"} nationalCode={"4060405531"} 
            province={"لرستان"} city={"خرم آباد"} price={"458000"} time={"14:45"} date={"1404/12/01"}/>
            <RequestWithdrawItem name={"اشکان حسنوندی"} expertise={"متخصص جراحی عمومی"} nationalCode={"4060405531"} 
            province={"لرستان"} city={"خرم آباد"} price={"458000"} time={"14:45"} date={"1404/12/01"}/>
          </div>
        </div>
        {(itemSelected != null) && <CreateWithdraw goBack={getItemSelected}/>}
      </>
    );
}