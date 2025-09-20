import { useDispatch } from "react-redux";
import SelectedItem from "../generalComponent/SelectedItem";
import {changeCompleteStatusMedicine, changeDoneStatusMedicine} from "../../slices/actionsSlice";

export default function Courier() {
  const dispatch = useDispatch();
  const changeCompleteStatus = () => {
    dispatch(changeCompleteStatusMedicine({key: "courier"}))
  }
  const changeDoneStatus = (done) => {
      dispatch(changeDoneStatusMedicine({key: "courier", doneStatus: done}))
  }
  return (
    <>
      <SelectedItem
        select={false}
        title={"اشکان حسنوندی "}
        text={"کارشناس بیهوشی"}
        changeCompleteStatus={changeCompleteStatus} changeDoneStatus={changeDoneStatus}
      />
      <SelectedItem
        select={false}
        title={"مونا بیرانوند"}
        text={"کارشناس پرستاری"}
        changeCompleteStatus={changeCompleteStatus} changeDoneStatus={changeDoneStatus}
      />
    </>
  );
}
