import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import RetrievePassword from "./pages/RetrievePassword";
import ParaClinic from "./pages/ParaClinic";
import TestRequest from "./pages/TestRequest";
import Medicine from "./pages/Medicine";
import Teriage from "./pages/Teriage";
import ProfileDr from "./pages/doctorPanel/ProfileDr";
import Account from "./pages/doctorPanel/Account";
import Doctor from "./pages/doctorPanel/Doctor";
import NeedForActionDr from "./pages/doctorPanel/NeedForActionDr";
import Dashboard from "./pages/dashboard/Dashboard";
import NeedForAction from "./pages/dashboard/NeedForAction";
import Comments from "./pages/dashboard/Comments"

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          <Route path="retrieve-password" element={<RetrievePassword />} />
        </Route>
        <Route element={<Account />}>
          <Route path="/account/profile" element={<ProfileDr />} />
          <Route path="/account/need-for-action" element={<NeedForActionDr />} />
          <Route path="/account/service-desk" element={<Doctor />} />
        </Route>
        <Route element={<Dashboard />}>
          <Route path="/dashboard/need-for-action" element={<NeedForAction />}/>
          <Route path="/dashboard/comments" element={<Comments/>}/>
        </Route>
        <Route path="/paraclinic" element={<ParaClinic />} />
        <Route path="/test-request" element={<TestRequest />} />
        <Route path="/medicine" element={<Medicine />} />
        <Route path="/teriage" element={<Teriage />} />
      </Routes>
    </BrowserRouter>
  );
}
