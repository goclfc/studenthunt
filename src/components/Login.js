import React, { useState, useEffect } from "react";
import logo from '../resources/images/logostd.svg'
import Register from "./Register";
import hallo from '../resources/images/hallo.svg'
import "./signin.css";
import { useNavigate } from "react-router-dom";
const Login = (props) => {
  const navigate= useNavigate()
  const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const saveEmail = (e) => {
      setEmail(e.target.value)
    }
    const savePassword = (e) => {
      setPassword(e.target.value)
    }
    const handleLogin = () => {
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
          if (result.jwt) {
            localStorage.setItem('token', result.jwt)
            localStorage.setItem('user', JSON.stringify(result.user))
            props.setLogedIn(true)
            navigate('/')
          }
        })
        .catch(error => console.log('error', error));
    }
    const handleRegister=()=>{
      navigate('/register')
    }
    return (
      <div className="signin-wrapper">
        <div className="signin-logo">
          <img src={logo} />
        </div>
        <div className="signin-greeting">
          <div>
          <h2>გამარჯობა </h2> 
          <img src={hallo}/>
          </div>
          <p>გაიარე ავტორიზაცია შენი სტუდენტური ელ-ფოსტით</p>
        </div>
        <div className="signin-inputs">
          <label for='email'>ელ-ფოსტა</label>
          <input type="text" onChange={saveEmail}></input>
          <label for='password'>პაროლი</label>
          <input type="password" onChange={savePassword}></input>
        </div>
        <div className="signin-check">
          <div>
            <input type="checkbox" /> დამახსოვრება </div>დაგავიწყდა პაროლი?

        </div>
        <div className="signin-buttons">
          <button onClick={handleLogin}>შესვლა</button>
          <div className="signin-border">
            <div></div><span>ან</span> <div></div>
          </div>
          <button className="reg" onClick={handleRegister}>დარეგისტრირდი</button>

        </div>

      </div>
    );
  };
  return (
    <div className="signin-card">
        <SignIn  />
    </div>
  );
};
export default Login;
