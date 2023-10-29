import { Route, Routes } from "react-router-dom";
import AuthRoutes from "./AuthRoutes";
import { Layout } from "../pages";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/*" element={<Layout />} />
    </Routes>
  );
};

export default AppRouter;
