import { Outlet } from "react-router-dom";
import Navbar from "../../components/doctorPanel/Navbar";

export default function Account() {
  return (
    <>
      <Outlet />
      <Navbar />
    </>
  );
}
