import { useDispatch } from "react-redux";
import SelectedItem from "../generalComponent/SelectedItem";
import {changeCompleteStatusTest} from "../../slices/actionsSlice";

export default function TestDr() {
  const dispatch = useDispatch();
  const changeCompleteStatus = () => {
      dispatch(changeCompleteStatusTest({key: "doctor"}))
  }
  return (
    <>
      <SelectedItem select={false} title={"دکتر مینا بیرانوند"}
        text={"دکترای تخصصی روانشناسی و مشاوره"} changeCompleteStatus={changeCompleteStatus}/>

      <SelectedItem select={false} title={"دکتر مینا بیرانوند"}
        text={"دکترای تخصصی روانشناسی و مشاوره"} changeCompleteStatus={changeCompleteStatus}/>
    </>
  );
}
