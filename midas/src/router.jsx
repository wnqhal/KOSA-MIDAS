import { Route, Routes, BrowserRouter } from "react-router-dom";

import AdminPage from "./pages/admin/AdminPage";
import MeetingPage from "./pages/meeting/MeetingPage";
import HomeWorkingPage from "./pages/homeWorking/HomeWorkingPage";
import HomeApprovalPage from "./pages/homeWorking/HomeApprovalPage";
import HomeReportPage from "./pages/homeWorking/HomeReportPage";
import AdminVacationPage from "./pages/Vacation/AdminVacationPage";
import LoginPage from "./pages/login/LoginPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/meeting" element={<MeetingPage />} />
        <Route path="/admin-homeworking" element={<HomeWorkingPage />} />
        <Route path="/homeapproval/:id" element={<HomeApprovalPage />} />
        <Route path="/homereport/:id" element={<HomeReportPage />} />
        <Route path="/admin-vacation" element={<AdminVacationPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
