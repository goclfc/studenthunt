import React, { useState, useEffect } from "react";
import logo from "../resources/images/Group.svg";
import name from "../resources/images/name.svg";
import Login from "./Login";
const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const user = localStorage.getItem('user')
  const token = localStorage.getItem('token')
  console.log(user)
  const handleLogin = () => {
    setShowLogin(true);
  };

  const handleClick = (e) => {
    if (e.target.className === "loginBg") {
      setShowLogin(false);
    }
  };
  return (
    <div className="header flex items-center p-8">
      <div className="logo-place flex items-center" style={{}}>
        <img src={logo} alt="logo" />
        <img src={name} alt="Studenthunt" />
      </div>
      <div
        className="menu flex justify-end w-full"
        style={{
          fontFamily: "fira sans",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "18px",
          lineHeight: "22px",
          color: "#000000",
        }}
      >
        <button className="mr-4">ჩვენს შესახებ</button>
        <button className="mr-4">როგორ მუშაობს?</button>
        <div className="mr-2">|</div>
        {user? <button>პროფილი</button>
        
      :
        <button className="mr-4" onClick={handleLogin}>
          Log in
        </button>
      }
      </div>
      {showLogin && (
        <div className="loginBg" onClick={handleClick}>
          <Login />
        </div>
      )}
    </div>
  );
};
export default Header;
