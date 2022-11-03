import { Route, Routes, BrowserRouter } from "react-router-dom";
import AdminPage from "./pages/admin/AdminPage";
import MeetingPage from "./pages/meeting/MeetingPage";
import HomeWorkingPage from "./pages/homeWorking/HomeWorkingPage";
import HomeApprovalPage from "./pages/homeWorking/HomeApprovalPage";
import HomeReportPage from "./pages/homeWorking/HomeReportPage";
import AdminVacationPage from "./pages/Vacation/AdminVacationPage";
import LoginPage from "./pages/login/LoginPage";
import HomePage from "./pages/home/HomePage";
import SignUpPage from "./pages/signUp/SignUpPage";
import UserHomeWorkingPage from "./pages/homeWorking/UserHomeWorkingPage";
import UserReportPage from "./pages/homeWorking/UserReportPage";
import UserMeetingPage from "./pages/meeting/UserMeetingPage";
import CoffeeChatPage from "./pages/coffee/CoffeeChatPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/meeting" element={<UserMeetingPage />} />
        <Route path="/admin-meeting" element={<MeetingPage />} />
        <Route path="/homeworking" element={<UserHomeWorkingPage />} />
        <Route path="/report" element={<UserReportPage />} />
        <Route path="/admin-homeworking" element={<HomeWorkingPage />} />
        <Route path="/homeapproval/:id" element={<HomeApprovalPage />} />
        <Route path="/homereport/:id" element={<HomeReportPage />} />
        <Route path="/admin-vacation" element={<AdminVacationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/coffee" element={<CoffeeChatPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
