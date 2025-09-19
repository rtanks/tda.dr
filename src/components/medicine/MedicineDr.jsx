import { useDispatch } from "react-redux";
import SelectedItem from "../generalComponent/SelectedItem";
import {changeCompleteStatusMedicine} from "../../slices/actionsSlice";

export default function MedicineDr() {
  const dispatch = useDispatch();
  const changeCompleteStatus = () => {
    dispatch(changeCompleteStatusMedicine({key: "doctor"}))
  }

  return (
    <>
      <SelectedItem
        select={false}
        title={"دکتر مینا بیرانوند"}
        text={"دکترای تخصصی روانشناسی و مشاوره"}
        changeCompleteStatus={changeCompleteStatus}
      />
      <SelectedItem
        select={false}
        title={"دکتر مینا بیرانوند"}
        text={"دکترای تخصصی روانشناسی و مشاوره"}
        changeCompleteStatus={changeCompleteStatus}
      />
    </>
  );
}
