import CommentItem from "../../components/dashboard/CommentItem";
import SearchBoxWithBtn from "../../components/generalComponent/SearchBoxWithBtn";
import { PiPlus } from "react-icons/pi";
import { CgMenuRight } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { changeToggleMenuStatus } from "../../slices/statusMenuSlice";

export default function Comments() {
    const dispatch = useDispatch();
    const changeToggleStatus = () => {
      dispatch(changeToggleMenuStatus());
    };
    return (
        <>
            <SearchBoxWithBtn onClick1={() => changeToggleStatus()}>
              {{
                menu: <CgMenuRight size={24}/>,
                icon: <PiPlus size={24} />,
              }}
            </SearchBoxWithBtn>
            <div className="w-full h-max flex flex-col mt-5 gap-5 bg-transparent">
                <CommentItem doctor={"پزشک اشکان حسنوندی"} expertise={"متخصص جراحی عمومی"} patient={"بیمار شکان حسنوندی"} service={"مشاوره متنی"} 
                time={"14:45"} date={"1404/12/01"} text={"ثصقسیزطظ زیبسثصسی ثشصسیزکج ثمسحج .محم.حغتقمفثحجثسم . طح.ب.سز"}/>

                <CommentItem doctor={"پزشک اشکان حسنوندی"} expertise={"متخصص جراحی عمومی"} patient={"بیمار شکان حسنوندی"} service={"مشاوره متنی"} 
                time={"14:45"} date={"1404/12/01"} text={"ثصقسیزطظ زیبسثصسی ثشصسیزکج ثمسحج .محم.حغتقمفثحجثسم . طح.ب.سز"}/>

                <CommentItem doctor={"پزشک اشکان حسنوندی"} expertise={"متخصص جراحی عمومی"} patient={"بیمار شکان حسنوندی"} service={"مشاوره متنی"} 
                time={"14:45"} date={"1404/12/01"} text={"ثصقسیزطظ زیبسثصسی ثشصسیزکج ثمسحج .محم.حغتقمفثحجثسم . طح.ب.سز"}/>
            </div>
        </>
    )
}