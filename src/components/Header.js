import React, { useState, useEffect } from "react";
import logo from "../resources/images/Group.svg";
import name from "../resources/images/name.svg";
import Login from "./Login";
import styles from './Header.module.css'
import avatar from '../resources/images/avatar.png'
import userIcon from '../resources/images/user.svg'
import layersIcon from '../resources/images/2-layers.svg'
import zapIcon from '../resources/images/zap.svg'
import settingsIcon from '../resources/images/settings.svg'
import logOutIcon from '../resources/images/log-out.svg'
import {FaBars}  from 'react-icons/fa'
const Header = (props) => {
  const showLogin = props.showLogin;
  const setShowLogin = props.setShowLogin
  const [showProfile,setShowProfile]=useState(false)
  const user = JSON.parse(localStorage.getItem('user'))
  const token = localStorage.getItem('token')

  const handleLogin = () => {
    setShowLogin(true);
  };

  const handleClick = (e) => {
    if (e.target.className === "loginBg") {
      setShowLogin(false);
    }
  };
  const handleProfileClick = ()=>{
    setShowProfile(prevState=>!prevState)
  }
  const handleLogOut = ()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    window.location.reload(false)
  }
  return (
    // <div className={styles.headerWrapper}>
    //   <div className={styles.headerLogo}>
    //     <img src={logo} alt="logo" />
    //     <img src={name} alt="Studenthunt" />
    //   </div>
    //   <div
    //     className={styles.buttonsWrapper}
    //   >

    //     {user? <button onClick={handleProfileClick}><FaBars/></button>
        
    //   :
    //     <button className="mr-4 font-bold" onClick={handleLogin}>
    //       შესვლა
    //     </button>
    //   }
    //   {showProfile&&
    //     <div className={styles.profile}>
    //       <div className={styles.userHeader}>
    //         <div className={styles.userIcon}> 
    //           <img src={avatar}/>
    //         </div>
    //         <div className={styles.userInfo}>
    //           <div>
    //           {user.username}
    //         </div>
    //         <div>
    //           {user.email}
    //         </div>
    //         </div>
    //       </div>
    //       <div className={styles.profileBody}>
    //         <div className={styles.profileSection}>
    //         <img src={userIcon}/> პირადი ინფო
    //         </div>
    //         <div className={styles.profileSection}>
    //         <img src={layersIcon}/> ჩემი შეთავაზებები
    //         </div>
    //         <div className={styles.profileSection}>
    //         <img src={zapIcon}/> სურვილები
    //         </div>
    //         <div className={styles.profileSection}>
    //         <img src={settingsIcon}/> პარამეტრები
    //         </div>
            
    //       </div>
    //       <div className={styles.profileSection} onClick={handleLogOut}>
    //         <img src={logOutIcon}/> გასვლა
    //       </div>
    //     </div>
    //   }
    //   </div>
    //   {showLogin && (
    //     <div className="loginBg" onClick={handleClick}>
    //       <Login />
    //     </div>
    //   )}
    // </div>
    <div className={styles.header_wrapper}>
      <div className={styles.header_logo}></div>
      <div className={styles.header_search}></div>
      <div className={styles.header_menu}></div>
    </div>
  );
};
export default Header;
