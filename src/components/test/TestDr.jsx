import { useDispatch } from "react-redux";
import SelectedItem from "../generalComponent/SelectedItem";
import {changeCompleteStatusTest, changeDoneStatusTest} from "../../slices/actionsSlice";

export default function TestDr() {
  const dispatch = useDispatch();
  const changeCompleteStatus = () => {
      dispatch(changeCompleteStatusTest({key: "doctor"}))
  }
  const changeDoneStatus = (done) => {
    dispatch(changeDoneStatusTest({key: "doctor", doneStatus: done}))
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
