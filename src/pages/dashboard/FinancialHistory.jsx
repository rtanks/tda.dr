import { CgMenuRight } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { changeToggleMenuStatus } from "../../slices/statusMenuSlice";
import SearchBoxWithMenu from "../../components/generalComponent/SearchBoxWithMenu";
import UserRole from "../../components/UserRole";
import FinancialHistoryItem from "../../components/dashboard/FinancialHistoryItem";
import FinancialHistoryDrawer from "../../components/dashboard/FinancialHistoryDrawer";
import { useState } from "react";

export default function FinancialHistory() {
    const roles = ["کاربران","همه","پزشک","پرستار","آزمایشگاه","تصویر برداری","پیک"];
    const dispatch = useDispatch();
    const [itemSelected, setItemSelected] = useState(null);
    const changeToggleStatus = () => {
      dispatch(changeToggleMenuStatus());
    };
    const getItemSelected = (item) => {
      setItemSelected(item)
    }
    return (
        <>
            {
              itemSelected == null ? (
                  <>
                    <SearchBoxWithMenu onClick={() => changeToggleStatus()}>
                      {<CgMenuRight size={24}/>}
                    </SearchBoxWithMenu>
                    <UserRole roles={roles}/>
                    <div className="w-full h-max flex flex-col gap-5">
                      <FinancialHistoryItem name={"اشکان حسنوندی"} expertise={"متخصص جراحی عمومی"} nationalCode={"4060405531"} 
                        province={"لرستان"} city={"خرم آباد"} shaba={"57856782854567874374867388"} number={12} onClick={() => getItemSelected("hi")}/>
                    </div>
                  </>   
              ) : (
                <FinancialHistoryDrawer onClick={() => getItemSelected(null)}/>
              )
            }
        </>
    )
}