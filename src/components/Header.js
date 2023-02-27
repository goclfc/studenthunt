import React, { useState, useEffect } from "react";
import logo from "../resources/images/Group.svg";
import name from "../resources/images/name.svg";
import Login from "./Login";
import styles from './Header.module.css'
import avatar from '../resources/images/Avatar.svg'
import userIcon from '../resources/images/user.svg'
import layersIcon from '../resources/images/2-layers.svg'
import zapIcon from '../resources/images/zap.svg'
import settingsIcon from '../resources/images/settings.svg'
import logOutIcon from '../resources/images/log-out.svg'
const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showProfile,setShowProfile]=useState(false)
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
  const handleProfileClick = ()=>{
    setShowProfile(prevState=>!prevState)
  }
  const handleLogOut = ()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    window.location.reload(false)
  }
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerLogo}>
        <img src={logo} alt="logo" />
        <img src={name} alt="Studenthunt" />
      </div>
      <div
        className={styles.buttonsWrapper}
      >

        {user? <button onClick={handleProfileClick}>პროფილი</button>
        
      :
        <button className="mr-4" onClick={handleLogin}>
          შესვლა
        </button>
      }
      {showProfile&&
        <div className={styles.profile}>
          <div className={styles.userHeader}>
            <div className={styles.userIcon}> 
              <img src={avatar}/>
            </div>
            <div className={styles.userInfo}>
              <div>
              ია მეძმარაშვილი
            </div>
            <div>
              ia.medzmarashvili@iliauni.ge
            </div>
            </div>
          </div>
          <div className={styles.profileBody}>
            <div className={styles.profileSection}>
            <img src={userIcon}/> პირადი ინფო
            </div>
            <div className={styles.profileSection}>
            <img src={layersIcon}/> ჩემი შეთავაზებები
            </div>
            <div className={styles.profileSection}>
            <img src={zapIcon}/> სურვილები
            </div>
            <div className={styles.profileSection}>
            <img src={settingsIcon}/> პარამეტრები
            </div>
            
          </div>
          <div className={styles.profileSection} onClick={handleLogOut}>
            <img src={logOutIcon}/> გასვლა
          </div>
        </div>
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
