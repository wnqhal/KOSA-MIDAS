import { Route, Routes, BrowserRouter } from "react-router-dom";
import AdminPage from "./pages/admin/AdminPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
