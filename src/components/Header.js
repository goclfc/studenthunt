import React,{useState,useEffect} from "react";
import logo from "../resources/images/Group.svg";
import name from "../resources/images/name.svg";
import Login from "./Login";
const Header = () => {
    const [showLogin,setShowLogin]= useState(false)
    const handleLogin = ()=>{
        setShowLogin(true)
    }
  return (
    <div className="header flex items-center p-8">
      <div className="logo-place flex items-center" style={{}}>
        <img src={logo} alt="logo" />
        <img src={name} alt="Studenthunt" />
      </div>
      <div
        className="menu flex justify-end w-full"
        style={{
          fontFamily: "FiraGO",
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
        <button className="mr-4" onClick={handleLogin}>Log in</button>
      </div>
      {showLogin &&
      <Login/>
      }
    </div>
  );
};
export default Header;
