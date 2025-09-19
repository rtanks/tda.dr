import { useDispatch } from "react-redux";
import SelectedItem from "../generalComponent/SelectedItem";
import {changeCompleteStatusParaClinic} from "../../slices/actionsSlice";

export default function ParaClinicDr() {
  const dispatch = useDispatch()

  const changeCompleteStatus = () => {
    dispatch(changeCompleteStatusParaClinic({key: "doctor"}))
  }
  return (
    <>
      <SelectedItem select={false} title={"دکتر مینا بیرانوند"} 
      text={"دکترای تخصصی روانشناسی و مشاوره"} changeCompleteStatus={changeCompleteStatus}/>

      <SelectedItem select={false} title={"دکتر مینا بیرانوند"} 
      text={"دکترای تخصصی روانشناسی و مشاوره"} changeCompleteStatus={changeCompleteStatus}/>
    </>
  );
}
