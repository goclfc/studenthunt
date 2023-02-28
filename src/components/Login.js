import React, { useState,useEffect } from "react";
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
      console.log(result.jwt)
      if(result.jwt){
        localStorage.setItem('token',result.jwt)
        localStorage.setItem('user',result.user.id)
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
      <div>
        <div className="signin-header">ავტორიზაცია</div>
        <div className="signin-inputs">
          <input type="email" placeholder="ელ-ფოსტა" onChange={saveEmail}/>
          <input type="password" placeholder="პაროლი" onChange={savePassword}/>
          <div className="signin-checkboxes">
            <div>
              <button>დაგავიწყდა პაროლი?</button>
            </div>
          </div>
          <div className="signin-button">
            <button onClick={handleLogin}>შესვლა</button>
          </div>
          <div className="signin-footer">
            არ გაქვს ექაუნთი?{" "}
            <button onClick={handleClick}>Sign up</button>
          </div>
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
