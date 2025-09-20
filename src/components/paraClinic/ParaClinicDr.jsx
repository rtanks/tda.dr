import { useDispatch } from "react-redux";
import SelectedItem from "../generalComponent/SelectedItem";
import {changeCompleteStatusParaClinic, changeDoneStatusParaClinic} from "../../slices/actionsSlice";

export default function ParaClinicDr() {
  const dispatch = useDispatch()

  const changeCompleteStatus = () => {
    dispatch(changeCompleteStatusParaClinic({key: "doctor"}))
  }
  const changeDoneStatus = (done) => {
      dispatch(changeDoneStatusParaClinic({key: "doctor", doneStatus: done}))
  }
  return (
    <>
      <SelectedItem select={false} title={"دکتر مینا بیرانوند"} 
      text={"دکترای تخصصی روانشناسی و مشاوره"} changeCompleteStatus={changeCompleteStatus} changeDoneStatus={changeDoneStatus}/>

      <SelectedItem select={false} title={"دکتر مینا بیرانوند"} 
      text={"دکترای تخصصی روانشناسی و مشاوره"} changeCompleteStatus={changeCompleteStatus} changeDoneStatus={changeDoneStatus}/>
    </>
  );
}
