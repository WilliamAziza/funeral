import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage.jsx";
import ServicesPage from "./ServicesPage.jsx";
import ContactPage from "./ContactPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}
