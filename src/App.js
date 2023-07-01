import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/HomePage/NavBar/Navbar";
import Home from "./components/HomePage/Home/Home";
import LoginPage from "./components/LoginPage/LoginPage";
import SignupPage from "./components/LoginPage/Signup";
import ScribeLogin from "./components/LoginPage/ScribeLogin";
import Preregister from "./components/HomePage/PreRegister/Preregister";
import ScribeSignup from "./components/LoginPage/ScribeSignup";
import Scribe from "./components/MainPage/Scribe/Scribe";
import Guardian from "./components/MainPage/Guardian/Guardian";
import SGuidelines from "./components/MainPage/SGuidelines";
import Guidelines from "./components/MainPage/Guidelines";
import SEditprofile from "./components/MainPage/Scribe/SEditprofile";
import GEditprofile from "./components/MainPage/Guardian/GEditprofile";

function App() {
  return (
    <Router>
      <div>
        <RouteAwareNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/preregister" element={<Preregister />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/scribelogin" element={<ScribeLogin />} />
          <Route path="/scribesignup" element={<ScribeSignup />} />
          <Route path="/guardian" element={<Guardian />} />
          <Route path="/scribe" element={<Scribe />} />
          <Route path="/seditprofile" element={<SEditprofile />} />
          <Route path="/geditprofile" element={<GEditprofile />} />
          <Route path="/guidelines" element={<Guidelines />} />
          <Route path="/sguidelines" element={<SGuidelines />} />
        </Routes>
      </div>
    </Router>
  );
}

function RouteAwareNavbar() {
  const location = useLocation();

  // Exclude Navbar component when the current path is "/login"
  if (
    location.pathname === "/preregister" ||
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/scribelogin" ||
    location.pathname === "/scribesignup" ||
    location.pathname === "/guardian" ||
    location.pathname === "/scribe" ||
    location.pathname === "/seditprofile" ||
    location.pathname === "/geditprofile" ||
    location.pathname === "/sguidelines" ||
    location.pathname === "/guidelines" ||
    location.pathname === "/preregister/" ||
    location.pathname === "/login/" ||
    location.pathname === "/signup/" ||
    location.pathname === "/scribelogin/" ||
    location.pathname === "/scribesignup/" ||
    location.pathname === "/guardian/" ||
    location.pathname === "/scribe/" ||
    location.pathname === "/seditprofile/" ||
    location.pathname === "/sguidelines/" ||
    location.pathname === "/guidelines/" ||
    location.pathname === "/geditprofile/"
  ) {
    return null;
  }

  return <Navbar />;
}

export default App;
