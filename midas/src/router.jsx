import { Route, Routes, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
