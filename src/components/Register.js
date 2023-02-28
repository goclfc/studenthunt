import SignUpForm from "./SignUpForm";
import "./register.css";
const Register = (props) => {
    const showRegister = props.setShowRegister
    const showSignIn = props.setShowSignIn
    const handleClick = ()=>{
        showRegister(false)
        showSignIn(true)
    }
  return (
    <div className="register-wrapper">
      <SignUpForm/>
    </div>
  );
};
export default Register;
