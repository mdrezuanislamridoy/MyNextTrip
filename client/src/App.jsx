import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import useAuthStore from "./state/UserState";

import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import ForgetPass from "./pages/auth/ForgetPass";

export default function App() {
  const { user, profile, logout } = useAuthStore();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProfile = async () => {
      await profile();
      setLoading(false);
    };
    getProfile();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="min-h-screen bg-gray-300">
      <BrowserRouter>
        <>
          <Navbar user={user} logout={logout} /> <br />
          <Routes>
            <Route
              path="/login"
              element={user ? <Navigate to={"/"} /> : <Login />}
            />
            <Route
              path="/signup"
              element={user ? <Navigate to={"/"} /> : <Signup />}
            />
            <Route path="/forgetPass" element={<ForgetPass />} />
            <Route path="/" element={<Home />} />
            <Route
              path="/profile"
              element={user ? <Profile /> : <Navigate to={"/login"} />}
            />
          </Routes>
        </>
      </BrowserRouter>
    </div>
  );
}
