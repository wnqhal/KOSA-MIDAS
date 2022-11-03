import { Route, Routes, BrowserRouter } from "react-router-dom";
import AdminPage from "./pages/admin/AdminPage";
import MeetingPage from "./pages/meeting/MeetingPage";
import HomeWorkingPage from "./pages/homeWorking/HomeWorkingPage";
import HomeApprovalPage from "./pages/homeWorking/HomeApprovalPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/meeting" element={<MeetingPage />} />
        <Route path="/admin-homeworking" element={<HomeWorkingPage />} />
        <Route path="/homeapproval/:id" element={<HomeApprovalPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
