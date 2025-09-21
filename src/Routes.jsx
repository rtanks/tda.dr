import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import RetrievePassword from "./pages/RetrievePassword";
import ParaClinic from "./pages/dashboard/ParaClinic";
import TestRequest from "./pages/dashboard/TestRequest";
import Medicine from "./pages/dashboard/Medicine";
import Teriage from "./pages/Teriage";
import ProfileDr from "./pages/doctorPanel/ProfileDr";
import Account from "./pages/doctorPanel/Account";
import Doctor from "./pages/doctorPanel/Doctor";
import NeedForActionDr from "./pages/doctorPanel/NeedForActionDr";
import Dashboard from "./pages/dashboard/Dashboard";
import NeedForAction from "./pages/dashboard/NeedForAction";
import Comments from "./pages/dashboard/Comments"
import InPersonConsultation from "./pages/actions/InPersonConsultation";
import InPersonRequest from "./pages/actions/InPersonRequest";
import EmergencyCall from "./pages/actions/EmergencyCall";
import RecordTestRequest from "./pages/actions/RecordTestRequest";
import RecordMedicineRequest from "./pages/actions/RecordMedicineRequest";
import RecordParaClinic from "./pages/actions/RecordParaClinic";
import TextConsultation from "./pages/actions/TextConsultation";

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
          <Route path="/account/need-for-action" element={<NeedForActionDr />}/>
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
        <Route path="/account/need-for-action/in-person-consultation" element={<InPersonConsultation/>}/>
        <Route path="/account/need-for-action/in-person-consultation/in-person-request" element={<InPersonRequest/>}/>
        <Route path="/account/need-for-action/emergency-call" element={<EmergencyCall/>}/>
        <Route path="/account/need-for-action/record-test-request" element={<RecordTestRequest/>}/>
        <Route path="/account/need-for-action/record-medicine-request" element={<RecordMedicineRequest/>}/>
        <Route path="/account/need-for-action/record-paraclinic-request" element={<RecordParaClinic/>}/>
        <Route path="/account/need-for-action/text-consultation" element={<TextConsultation/>}/>
      </Routes>
    </BrowserRouter>
  );
}
