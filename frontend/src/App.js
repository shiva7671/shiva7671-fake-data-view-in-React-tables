import { Routes, Route } from "react-router-dom";

// Routes
import LoginRoute from "./components/LoginRoute/LoginRoute.js";
import HomeRoute from "./components/HomeRoute/HomeRoute.js";
import DirectCompanies from "./components/DirectCompanies/DirectCompanies.js";
import KnrDealers from "./components/KnrDealers/KnrDealers.js";
import Farmers from "./components/Farmers/Farmers.js";

const App = () => {
  return (
    <Routes>
      {/* Login Page */}
      <Route path="/" element={<LoginRoute />} />

      {/* Home Page */}
      <Route path="/home" element={<HomeRoute />} />

      {/* Direct Companies Page */}
      <Route path="/direct-companies" element={<DirectCompanies />} />

      {/* KNR Dealers Page */}
      <Route path="/knr-dealers" element={<KnrDealers />} />

      {/* Farmers Page */}
      <Route path="/farmers" element={<Farmers />} />

      {/* Optional: Catch-all 404 route */}
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default App;


