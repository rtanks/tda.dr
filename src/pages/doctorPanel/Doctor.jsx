import { Outlet } from "react-router-dom";
import Navbar from "../../components/doctorPanel/Navbar";

export default function Doctor() {
  return (
    <div className="w-full">
      <Outlet />
      <Navbar />
    </div>
  );
}
