import { Route, Routes, BrowserRouter } from "react-router-dom";
import AdminPage from "./pages/admin/AdminPage";
import MeetingPage from "./pages/meeting/MeetingPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/meeting" element={<MeetingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
