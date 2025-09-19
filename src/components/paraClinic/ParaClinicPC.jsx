import { useDispatch } from "react-redux";
import SelectedItem from "../generalComponent/SelectedItem";
import {changeCompleteStatusParaClinic} from "../../slices/actionsSlice"

export default function ParaClinicPC() {
  const dispatch = useDispatch();

  const changeCompleteStatus = () => {
    dispatch(changeCompleteStatusParaClinic({key: "paraClinic"}))
  }
  return (
    <>
      <SelectedItem select={false} title={"مرکز تصویر برداری سپیدار"} 
      text={"خیابان شریعتی - جنب پارک "} changeCompleteStatus={changeCompleteStatus}/>
      
      <SelectedItem select={false} title={"مرکز رادیولوژی میهن"} 
      text={"خیابان شریعتی - جنب پارک "} changeCompleteStatus={changeCompleteStatus}/>
    </>
  );
}
