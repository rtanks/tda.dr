import { useDispatch } from "react-redux";
import SelectedItem from "../generalComponent/SelectedItem";
import {changeCompleteStatusMedicine, changeDoneStatusMedicine} from "../../slices/actionsSlice";

export default function Drugstore() {
  const dispatch = useDispatch();
  const changeCompleteStatus = () => {
    dispatch(changeCompleteStatusMedicine({key: "drugstore"}))
  }
  const changeDoneStatus = (done) => {
      dispatch(changeDoneStatusMedicine({key: "drugstore", doneStatus: done}))
  }
  return (
    <>
      <SelectedItem
        select={false}
        title={"آزمایشگاه نور"}
        text={"خیابان شریعتی - جنب پارک "}
        changeCompleteStatus={changeCompleteStatus} 
        changeDoneStatus={changeDoneStatus}
      />
      <SelectedItem
        select={false}
        title={"آزمایشگاه پاستور"}
        text={"خیابان شریعتی - جنب پارک "}
        changeCompleteStatus={changeCompleteStatus}
        changeDoneStatus={changeDoneStatus}
      />
    </>
  );
}
