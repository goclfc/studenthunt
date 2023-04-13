import SignUpForm from "./SignUpForm";
import "./register.css";
const Register = (props) => {
  const showRegister = props.setShowRegister
  const showSignIn = props.setShowSignIn
  const handleClick = () => {
    showRegister(false)
    showSignIn(true)
  }
  return (
    <div className="register-wrapper">
      <div className="signup-form-wrapper">
        <SignUpForm />
      </div>
    </div>
  );
};
export default Register;
