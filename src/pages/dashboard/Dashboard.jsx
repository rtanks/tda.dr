import { Outlet } from "react-router-dom";
import MainMenu from "../../components/dashboard/MainMenu";
import Navbar from "../../components/dashboard/Navbar";
import SearchBoxWithBtn from "../../components/generalComponent/SearchBoxWithBtn";
import { useState } from "react";
import { PiPlus } from "react-icons/pi";
import { CgMenuRight } from "react-icons/cg";
import Comments from "./Comments";
import NeedForAction from "./NeedForAction";

export default function Dashboard() {
  const [toggle, setToggle] = useState(false);
  const changeToggleStatus = () => {
    setToggle((prev) => !prev);
  };
  const [view, setView] = useState('needAction');
  const [active, setActive] = useState({
    needAction: true,
    comments: false
  })
  const changeActiveElem = (key, name) => {
    setActive(key)
    setView(name)
  }
  const showElem = () => {
    switch(view) {
      case "needAction": return <NeedForAction/>
      case "comments": return <Comments/>
    }
  }
  return (
    <div className="w-full h-screen absolute left-0 top-0 flex flex-row bg-white md:bg-[#fafafa]">
      <MainMenu active={active} toggle={toggle} changeToggleStatus={changeToggleStatus} changeActiveElem={changeActiveElem}/>
      <div className="w-full md:w-[82.8%] h-full overflow-y-scroll">
        <Navbar />
        <div className="w-full h-max md:h-[90%] bg-transparent p-[18px]">
          <SearchBoxWithBtn>
            {{
              menu: <CgMenuRight size={24} onClick={changeToggleStatus} />,
              icon: <PiPlus size={24} />,
            }}
          </SearchBoxWithBtn>
          <div className="w-full h-max mt-5">
            {
              showElem()
            }
          </div>
        </div>
      </div>
    </div>
  );
}
