import { useDispatch } from "react-redux";
import SelectedItem from "../generalComponent/SelectedItem";
import {changeCompleteStatusParaClinic, changeDoneStatusParaClinic} from "../../slices/actionsSlice"

export default function ParaClinicPC() {
  const dispatch = useDispatch();

  const changeCompleteStatus = () => {
    dispatch(changeCompleteStatusParaClinic({key: "paraClinic"}))
  }
  const changeDoneStatus = (done) => {
      dispatch(changeDoneStatusParaClinic({key: "paraClinic", doneStatus: done}))
  }
  return (
    <>
      <SelectedItem select={false} title={"مرکز تصویر برداری سپیدار"} 
      text={"خیابان شریعتی - جنب پارک "} changeCompleteStatus={changeCompleteStatus} changeDoneStatus={changeDoneStatus}/>
      
      <SelectedItem select={false} title={"مرکز رادیولوژی میهن"} 
      text={"خیابان شریعتی - جنب پارک "} changeCompleteStatus={changeCompleteStatus} changeDoneStatus={changeDoneStatus}/>
    </>
  );
}
