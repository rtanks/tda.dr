import { useDispatch } from "react-redux";
import SelectedItem from "../generalComponent/SelectedItem";
import {changeCompleteStatusMedicine} from "../../slices/actionsSlice";

export default function Drugstore() {
  const dispatch = useDispatch();
  const changeCompleteStatus = () => {
    dispatch(changeCompleteStatusMedicine({key: "drugstore"}))
  }

  return (
    <>
      <SelectedItem
        select={false}
        title={"آزمایشگاه نور"}
        text={"خیابان شریعتی - جنب پارک "}
        changeCompleteStatus={changeCompleteStatus}
      />
      <SelectedItem
        select={false}
        title={"آزمایشگاه پاستور"}
        text={"خیابان شریعتی - جنب پارک "}
        changeCompleteStatus={changeCompleteStatus}
      />
    </>
  );
}
