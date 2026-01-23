import { Routes, Route } from "react-router-dom";
import MemorialPage from "./MemorialPage.jsx";
import QRPage from "./QRPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<QRPage />} />
      <Route path="/memorial" element={<MemorialPage />} />
    </Routes>
  );
}
