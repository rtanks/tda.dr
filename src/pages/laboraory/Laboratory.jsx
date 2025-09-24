import { Outlet } from "react-router-dom";
import MainMenu from "../../components/laboratory/MainMenu";
import Navbar from "../../components/laboratory/Navbar";
import MainMenuResponse from "../../components/laboratory/MainMenuResponse";

export default function Laboratory() {
  
  return (
    <div className="w-full h-max md:h-screen absolute left-0 top-0 flex flex-row bg-white md:bg-[#fafafa]">
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
