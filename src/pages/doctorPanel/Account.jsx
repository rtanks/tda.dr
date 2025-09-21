import Navbar from "../../components/doctorPanel/Navbar";
import Doctor from "./Doctor";
import NeedForActionDr from "./NeedForActionDr";
import ProfileDr from "./ProfileDr";
import { useState } from "react";

export default function Account() {
   const [view, setView] = useState('profile');
    const [active, setActive] = useState({
      profile: true,
      serviceDesk: false,
      needAction: false
    })
    const changeActiveElem = (key, name) => {
      setActive(key)
      setView(name)
    }
    const showElem = () => {
      switch(view) {
        case "needAction": return <NeedForActionDr/>
        case "serviceDesk": return <Doctor/>
        case "profile": return <ProfileDr/>
      }
    }
  return (
    <div className="w-full h-screen">
      <div className="w-full h-screen overflow-y-scroll"> 
        {
          showElem()
        }
      </div>
      <Navbar active={active} changeActiveElem={changeActiveElem}/>
    </div>
  );
}
