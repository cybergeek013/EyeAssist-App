import { useState } from "react";
import Logo from "../../../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseSquare } from "react-icons/ai";
import "./navbar.css";

// Define MobileMenu component
const MobileMenu = () => {
  return (
    <div className={"mobile-menu"}>
      <a href="/home">Home</a>
      <a href="#about">About</a>
      <a href="#feedback">Feedback</a>
    </div>
  );
};
const Navbar = () => {
  const navigate = useNavigate();
  const [isShown, setIsShown] = useState(false);
  const toggleMobileMenu = () => {
    setIsShown(!isShown);
  };

  const navigateToPreregister = () => {
    let path = "/preregister";
    navigate(path);
  };

  return (
    <div className="topnav">
      <div className="logo">
        <img src={Logo} alt="logo" width={45} />
        Eye<span>Assist</span>
      </div>

      <div className="menu">
        <div>
          <a href="/home" className="hoverlink">
            Home
          </a>
        </div>
        <div>
          <a href="#about" className="hoverlink">
            About
          </a>
        </div>
        <div>
          <a href="#feedback" className="hoverlink">
            Feedback
          </a>
        </div>
      </div>
      <div className="login-container">
        <button className="loginbtn" onClick={navigateToPreregister}>
          {" "}
          Login/Register
        </button>
      </div>

      {/* This button only shows up on small screens. It is used to open the mobile menu */}
      <button className="show-mobile-menu-button" onClick={toggleMobileMenu}>
        <GiHamburgerMenu size={30} />
      </button>
      {isShown && <MobileMenu />}
      {isShown && (
        <button className="close-mobile-menu-button" onClick={toggleMobileMenu}>
          <AiFillCloseSquare size={40} />
        </button>
      )}
    </div>
  );
};

export default Navbar;
