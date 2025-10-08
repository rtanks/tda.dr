import { Outlet } from "react-router-dom";
import MainMenu from "../../components/drugstore/MainMenu";
import Navbar from "../../components/drugstore/Navbar";
import MainMenuResponse from "../../components/drugstore/MainMenuResponse";

export default function Drugstore() {
  return (
    <div className="w-[402px] md:w-full h-max md:h-screen md:absolute md:left-0 md:top-0 flex flex-row bg-white md:bg-[#fafafa]">
      <MainMenu/>
      <div className="w-full md:w-[82.8%] h-full">
        <Navbar />
        <div className="w-full mx-auto md:mx-0 h-max md:h-[90%] bg-transparent">
          <Outlet />
        </div>
        <MainMenuResponse/>
      </div>
    </div>
  );
}
