import { useDispatch } from "react-redux";
import SelectedItem from "../generalComponent/SelectedItem";
import {changeCompleteStatusTest} from "../../slices/actionsSlice";

export default function TestLaboratory() {
  const dispatch = useDispatch();
  const changeCompleteStatus = () => {
      dispatch(changeCompleteStatusTest({key: "laboratory"}))
  }
  return (
    <>
      <SelectedItem select={false} title={"آزمایشگاه نور"}
        text={"خیابان شریعتی - جنب پارک "} changeCompleteStatus={changeCompleteStatus}/>

      <SelectedItem select={false} title={"آزمایشگاه پاستور"}
        text={"خیابان شریعتی - جنب پارک "} changeCompleteStatus={changeCompleteStatus}/>
    </>
  );
}
