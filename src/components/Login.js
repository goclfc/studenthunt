import React, { useState,useEffect } from "react";
import logo from '../resources/images/logostd.svg'
import Register from "./Register";
import "./signin.css";
const Login = () => {
  const [showSignIn, setShowSignin] = useState(true);
  const [showRegister, setShowRegister] = useState(false);
 
  const SignIn = (props) => {
    const showRegister = props.setShowRegister;
    const showSignIn = props.setShowSignin;
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const saveEmail =(e)=>{
      setEmail(e.target.value)
    }
    const savePassword = (e)=>{
      setPassword(e.target.value)
    }
  const handleLogin =()=>{
    var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({
    "identifier": email,
    "password": password
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("https://studenthunt.herokuapp.com/api/auth/local", requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result,1111)
      if(result.jwt){
        localStorage.setItem('token',result.jwt)
        localStorage.setItem('user',JSON.stringify(result.user))
        window.location.reload(false)
      }
    })
    .catch(error => console.log('error', error));
  }
    const handleClick = ()=>{
      showRegister(true)
      showSignIn(false)
    }
    return (
      <div className="signin-wrapper">
        <div className="signin-logo">
          <img src={logo}/>
        </div>
        <div className="signin-greeting">
          <h2>გამარჯობა</h2>
          <p>გაიარე ავტორიზაცია შენი სტუდენტური ელ-ფოსტით</p>
        </div>
        <div className="signin-inputs">
          <label for='email'>ელ-ფოსტა</label>
          <input type="text"></input>
          <label for='password'>პაროლი</label>
          <input type="password"></input>
        </div>
        <div className="signin-check">
          <input type="checkbox"/> დამახსოვრება დაგავიწყდა პაროლი?

        </div>
        <div className="signin-buttons">
          <button>შესვლა</button>
          <div className="signin-border"></div>
          <button>დარეგისტრირდი</button>

        </div>

      </div>
    );
  };
  return (
    <div className="signin-card">
      {showSignIn && 
       <SignIn setShowSignin={setShowSignin} setShowRegister={setShowRegister}/>
      }
      {showRegister && 
       <Register setShowSignIn={setShowSignin} setShowRegister={setShowRegister} /> 
      }
    </div>
  );
};
export default Login;
