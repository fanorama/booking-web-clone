import MainLayout from "@layouts/MainLayout";
import FlightPage from "@pages/FlightPage";
import HomePage from "@pages/HomePage";
import { Route, BrowserRouter as Router, Routes } from "react-router";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/flights" element={<FlightPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
