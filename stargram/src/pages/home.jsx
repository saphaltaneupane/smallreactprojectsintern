import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "..pages/login";
import Login from "../pages/login";
import Login from "../pages/login";

import Home from "./pages/home";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
