import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "./state/useAuthStore";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/login";

export default function App() {
  const user = useAuthStore((state) => state.user);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Home — Protected Route */}
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />

        {/* Login Page */}
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}
