import { Outlet } from "react-router-dom";
import MainMenu from "../../components/dashboard/MainMenu";
import Navbar from "../../components/dashboard/Navbar";
import SearchBoxWithBtn from "../../components/generalComponent/SearchBoxWithBtn";
import { useState } from "react";
import { PiPlus } from "react-icons/pi";
import { CgMenuRight } from "react-icons/cg";

export default function Dashboard() {
  const [toggle, setToggle] = useState(false);
  const changeToggleStatus = () => {
    setToggle((prev) => !prev);
  };
  return (
    <div className="w-full h-max md:h-screen absolute left-0 top-0 flex flex-row bg-white md:bg-[#fafafa]">
      <MainMenu toggle={toggle} changeToggleStatus={changeToggleStatus} />
      <div className="w-full md:w-[82.8%] h-full">
        <Navbar />
        <div className="w-full h-max md:h-[90%] bg-transparent p-[18px]">
          <SearchBoxWithBtn>
            {{
              menu: <CgMenuRight size={24} onClick={changeToggleStatus} />,
              icon: <PiPlus size={24} />,
            }}
          </SearchBoxWithBtn>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
