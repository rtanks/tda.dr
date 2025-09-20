import { useDispatch } from "react-redux";
import SelectedItem from "../generalComponent/SelectedItem";
import {changeCompleteStatusMedicine, changeDoneStatusMedicine} from "../../slices/actionsSlice";

export default function MedicineDr() {
  const dispatch = useDispatch();
  const changeCompleteStatus = () => {
    dispatch(changeCompleteStatusMedicine({key: "doctor"}))
  }
  const changeDoneStatus = (done) => {
      dispatch(changeDoneStatusMedicine({key: "doctor", doneStatus: done}))
  }
  return (
    <>
      <SelectedItem
        select={false}
        title={"دکتر مینا بیرانوند"}
        text={"دکترای تخصصی روانشناسی و مشاوره"}
        changeCompleteStatus={changeCompleteStatus}
        changeDoneStatus={changeDoneStatus}
      />
      <SelectedItem
        select={false}
        title={"دکتر مینا بیرانوند"}
        text={"دکترای تخصصی روانشناسی و مشاوره"}
        changeCompleteStatus={changeCompleteStatus}
        changeDoneStatus={changeDoneStatus}
      />
    </>
  );
}
