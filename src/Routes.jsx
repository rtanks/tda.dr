import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import RetrievePassword from "./pages/RetrievePassword";
import ProfileDr from "./pages/doctorPanel/ProfileDr";
import NeedForActionDr from "./pages/doctorPanel/NeedForActionDr";
import Dashboard from "./pages/dashboard/Dashboard";
import NeedForAction from "./pages/dashboard/NeedForAction";
import Comments from "./pages/dashboard/Comments";
import ServiceDesk from "./pages/doctorPanel/ServiceDesk";
import Doctor from "./pages/doctorPanel/Doctor";
import Laboratory from "./pages/laboratory/Laboratory";
import NeedForActionL from "./pages/laboratory/NeedForActionL";
import ProfileL from "./pages/laboratory/ProfileL";
import ServiceDeskL from "./pages/laboratory/ServiceDeskL";
import ParaClinicMain from "./pages/paraClinic/ParaClinicMain";
import NeedForActionP from "./pages/paraClinic/NeedForActionP";
import ProfileP from "./pages/paraClinic/ProfileP";
import ServiceDeskP from "./pages/paraClinic/ServiceDeskP";
import RecordDoctor from "./pages/dashboard/RecordDoctor";
import RequestWithdraw from "./pages/dashboard/RequestWithdraw";
import FinancialHistory from "./pages/dashboard/FinancialHistory";
import RecordDoctorL from "./pages/laboratory/RecordDoctorL";
import RecordDoctorP from "./pages/paraClinic/RecordDoctorP";
import Patient from "./pages/dashboard/Patient";
import Drugstore from "./pages/drugstore/Drugstore";
import ServiceDeskD from "./pages/drugstore/ServiceDeskD";
import NeedForActionD from "./pages/drugstore/NeedForActionD";
import ProfileD from "./pages/drugstore/ProfileD";
import RecordDoctorD from "./pages/drugstore/RecordDoctorD";

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
          <Route path="/dashboard/record-doctor" element={<RecordDoctor/>}/>
          <Route path="/dashboard/request-withdraw" element={<RequestWithdraw/>}/>
          <Route path="/dashboard/financial-history" element={<FinancialHistory/>}/>
          <Route path="/dashboard/patient" element={<Patient/>}/>
        </Route>
        <Route element={<Laboratory/>}>
          <Route path="/laboratory/need-for-action" element={<NeedForActionL/>}/>
          <Route path="/laboratory/profile" element={<ProfileL/>}/>
          <Route path="/laboratory/service-desk" element={<ServiceDeskL/>}/>
          <Route path="/laboratory/record-doctor" element={<RecordDoctorL/>}/>
        </Route>
        <Route element={<ParaClinicMain/>}>
            <Route path="/paraclinic/need-for-action" element={<NeedForActionP/>}/>
            <Route path="/paraclinic/profile" element={<ProfileP/>}/>
            <Route path="/paraclinic/service-desk" element={<ServiceDeskP/>}/>
            <Route path="/paraclinic/record-doctor" element={<RecordDoctorP/>}/>
        </Route>
        <Route element={<Drugstore/>}>
          <Route path="/drugstore/need-for-action" element={<NeedForActionD/>}/>
          <Route path="/drugstore/profile" element={<ProfileD/>}/>
          <Route path="/drugstore/service-desk" element={<ServiceDeskD/>}/>
          <Route path="/drugstore/record-doctor" element={<RecordDoctorD/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
