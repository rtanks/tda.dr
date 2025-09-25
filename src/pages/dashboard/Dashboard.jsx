import { Outlet } from "react-router-dom";
import MainMenu from "../../components/dashboard/MainMenu";
import Navbar from "../../components/dashboard/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { changeToggleMenuStatus } from "../../slices/statusMenuSlice";

export default function Dashboard() {
  const toggle = useSelector(state => state.statusMenu.toggle)
  const dispatch = useDispatch()
  const changeToggleStatus = () => {
      dispatch(changeToggleMenuStatus());
    };
  return (
    <div className="w-[402px] md:w-full h-max md:h-screen md:absolute md:left-0 md:top-0 flex flex-row bg-white md:bg-[#fafafa]">
      <MainMenu toggle={toggle} changeToggleStatus={changeToggleStatus} />
      <div className="w-full md:w-[82.8%] h-full">
        <Navbar />
        <div className="w-full h-max md:h-[90%] bg-transparent p-[18px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
