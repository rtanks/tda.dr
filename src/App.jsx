import { BrowserRouter, Route, Routes } from "react-router-dom";
import SpecialLogin from "./pages/SpecialLogin";
import RetrievePassword from "./pages/RetrievePassword";
import ProfileDr from "./pages/doctorPanel/ProfileDr";
import Account from "./pages/doctorPanel/Account";
import Doctor from "./pages/doctorPanel/Doctor";
import ParaClinic from "./pages/ParaClinic";
import TestRequest from "./pages/TestRequest";
import Medicine from "./pages/Medicine";
import Teriage from "./pages/Teriage";
import Dashboard from "./pages/Dashboard";
import NeedForAction from "./pages/NeedForAction";
import NeedForActionDr from "./pages/doctorPanel/NeedForActionDr";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SpecialLogin />} />
        <Route path="/retrieve-password" element={<RetrievePassword />} />
        <Route element={<Account />}>
          <Route path="/account/profile" element={<ProfileDr />} />
          <Route
            path="/account/need-for-action"
            element={<NeedForActionDr />}
          />
          <Route path="/account/service-desk" element={<Doctor />} />
        </Route>
        <Route path="paraclinic" element={<ParaClinic />} />
        <Route path="test-request" element={<TestRequest />} />
        <Route path="medicine" element={<Medicine />} />
        <Route path="teriage" element={<Teriage />} />
        <Route element={<Dashboard />}>
          <Route path="/dashboard/need-for-action" element={<NeedForAction />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
