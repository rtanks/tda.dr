import { useDispatch } from "react-redux";
import SelectedItem from "../generalComponent/SelectedItem";
import {changeCompleteStatusTest, changeDoneStatusTest} from "../../slices/actionsSlice";

export default function TestSample() {
  const dispatch = useDispatch();
  const changeCompleteStatus = () => {
      dispatch(changeCompleteStatusTest({key: "sample"}))
  }
  const changeDoneStatus = (done) => {
      dispatch(changeDoneStatusTest({key: "sample", doneStatus: done}))
  }
  return (
    <>
      <SelectedItem select={false} title={"اشکان حسنوندی "}
        text={"کارشناس بیهوشی"} changeCompleteStatus={changeCompleteStatus} changeDoneStatus={changeDoneStatus}/>
      <SelectedItem select={false} title={"مونا بیرانوند"}
        text={"کارشناس پرستاری"} changeCompleteStatus={changeCompleteStatus} changeDoneStatus={changeDoneStatus}/>
    </>
  );
}
