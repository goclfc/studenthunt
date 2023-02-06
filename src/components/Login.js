import React, { useState } from "react";
import Register from "./Register";
import "./signin.css";
const Login = () => {
  const [showSignIn, setShowSignin] = useState(true);
  const [showRegister, setShowRegister] = useState(false);
  const SignIn = (props) => {
    const showRegister = props.setShowRegister;
    const showSignIn = props.setShowSignin;
    const handleClick = ()=>{
      showRegister(true)
      showSignIn(false)
    }
    return (
      <div>
        <div className="signin-header">გაიარე ავტორიზაცია</div>
        <div className="signin-text">
          ავტორიზაციისთვის აუცილებელია, იყოთ საქართველოში არსებული უნივერსიტეტის
          სტუდენტი და გაგაჩნდეთ უნივერსიტეტის აქტიური ელ-ფოსტა.
        </div>
        <div className="signin-inputs">
          <input type="email" placeholder="ელ-ფოსტა" />
          <input type="password" placeholder="პაროლი" />
          <div className="signin-checkboxes">
            <div>
              <checkbox>დამახსოვრება</checkbox>
            </div>
            <div>
              <button>დაგავიწყდა პაროლი?</button>
            </div>
          </div>
          <div className="signin-button">
            <button>შესვლა</button>
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
