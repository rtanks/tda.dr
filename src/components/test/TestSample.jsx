import { useDispatch } from "react-redux";
import SelectedItem from "../generalComponent/SelectedItem";
import {changeCompleteStatusTest} from "../../slices/actionsSlice";

export default function TestSample() {
  const dispatch = useDispatch();
  const changeCompleteStatus = () => {
      dispatch(changeCompleteStatusTest({key: "sample"}))
  }
  return (
    <>
      <SelectedItem select={false} title={"اشکان حسنوندی "}
        text={"کارشناس بیهوشی"} changeCompleteStatus={changeCompleteStatus}/>
      <SelectedItem select={false} title={"مونا بیرانوند"}
        text={"کارشناس پرستاری"} changeCompleteStatus={changeCompleteStatus}/>
    </>
  );
}
