import { useDispatch } from "react-redux";
import SelectedItem from "../generalComponent/SelectedItem";
import {changeCompleteStatusMedicine} from "../../slices/actionsSlice";

export default function Courier() {
  const dispatch = useDispatch();
  const changeCompleteStatus = () => {
    dispatch(changeCompleteStatusMedicine({key: "courier"}))
  }

  return (
    <>
      <SelectedItem
        select={false}
        title={"اشکان حسنوندی "}
        text={"کارشناس بیهوشی"}
        changeCompleteStatus={changeCompleteStatus}
      />
      <SelectedItem
        select={false}
        title={"مونا بیرانوند"}
        text={"کارشناس پرستاری"}
        changeCompleteStatus={changeCompleteStatus}
      />
    </>
  );
}
