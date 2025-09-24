import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import RetrievePassword from "./pages/RetrievePassword";
import ParaClinic from "./pages/dashboard/ParaClinic";
import TestRequest from "./pages/dashboard/TestRequest";
import Medicine from "./pages/dashboard/Medicine";
import Teriage from "./pages/Teriage";
import ProfileDr from "./pages/doctorPanel/ProfileDr";
import NeedForActionDr from "./pages/doctorPanel/NeedForActionDr";
import Dashboard from "./pages/dashboard/Dashboard";
import NeedForAction from "./pages/dashboard/NeedForAction";
import Comments from "./pages/dashboard/Comments";
import ServiceDesk from "./pages/doctorPanel/ServiceDesk";
import Doctor from "./pages/doctorPanel/Doctor";
import Laboratory from "./pages/laboraory/Laboratory";
import NeedForActionL from "./pages/laboraory/NeedForActionL";
import ProfileL from "./pages/laboraory/ProfileL";
import ServiceDeskL from "./pages/laboraory/ServiceDeskL";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          <Route path="retrieve-password" element={<RetrievePassword />} />
        </Route>
        <Route element={<Doctor />}>
          <Route path="/doctor/profile" element={<ProfileDr />} />
          <Route path="/doctor/need-for-action" element={<NeedForActionDr />}/>
          <Route path="/doctor/service-desk" element={<ServiceDesk />} />
        </Route>
        <Route element={<Dashboard />}>
          <Route path="/dashboard/need-for-action" element={<NeedForAction />}/>
          <Route path="/dashboard/comments" element={<Comments/>}/>
        </Route>
        <Route path="/paraclinic" element={<ParaClinic />} />
        <Route path="/test-request" element={<TestRequest />} />
        <Route path="/medicine" element={<Medicine />} />
        <Route path="/teriage" element={<Teriage />} />
        <Route element={<Laboratory/>}>
          <Route path="/laboratory/need-for-action" element={<NeedForActionL/>}/>
          <Route path="/laboratory/profile" element={<ProfileL/>}/>
          <Route path="/laboratory/service-desk" element={<ServiceDeskL/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
