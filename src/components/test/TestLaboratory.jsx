import { useDispatch, useSelector } from "react-redux";
import SelectedItem from "../generalComponent/SelectedItem";
import {changeCompleteStatusTest, changeDoneStatusTest} from "../../slices/actionsSlice";

export default function TestLaboratory() {
  const dispatch = useDispatch();
  const changeCompleteStatus = () => {
      dispatch(changeCompleteStatusTest({key: "laboratory"}))
  }
  const changeDoneStatus = (done) => {
      dispatch(changeDoneStatusTest({key: "laboratory", doneStatus: done}))
  }
  return (
    <>
      <SelectedItem select={false} title={"آزمایشگاه نور"}
        text={"خیابان شریعتی - جنب پارک "} changeCompleteStatus={changeCompleteStatus} changeDoneStatus={changeDoneStatus}/>

      <SelectedItem select={false} title={"آزمایشگاه پاستور"} do
        text={"خیابان شریعتی - جنب پارک "} changeCompleteStatus={changeCompleteStatus} changeDoneStatus={changeDoneStatus}/>
    </>
  );
}
