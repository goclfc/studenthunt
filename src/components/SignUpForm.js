import React, { useState } from 'react';
import styles from './Form.module.css'
import logo from '../resources/images/logostd.svg'
const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [registered,setRegistered]=useState(false)
  const handleEmail = (e)=>{
    const email = e.target.value
    if(email.endsWith("edu.ge")){
      setEmail(email)
    }else{
      setEmail('No student mail')
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: email,
      username:'riki',
      password: password,
      confirmed: false,
      provider: 'local',
      blocked:false
    };

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body:JSON.stringify(data),
      redirect: 'follow'
    };
    
    fetch("https://studenthunt.herokuapp.com/api/auth/local/register", requestOptions)
      .then(response => response.json())
      .then(result => {
        setRegistered(true)
      })
      .catch(error => console.log('error', error));
  };

  return (
    <div className="register-form-wrapper">
      <div className='register-form-header'>
        <div className='register-form-logo'><img src={logo}/></div>
        <div className='register-form-greeting'>რეგისტრაცია</div>
      </div>
      <div className='register-form-inputs'>
        <div className='input-short'>

        <label>სახელი</label>
        <input type="text" className='input-short'></input>
        </div>
        <div className='input-short'>

        <label>გვარი</label>
        <input type="text" className='input-short'></input>
        </div>
        <div className='input-long'>
        
        <label>უნივერსიტეტის ელ-ფოსტა</label>
        <input type="text" placeholder='you@university.edu.ge' className='input-long'></input>
       
       </div>
        <div className='input-long'>
        <label>პაროლი</label>
        <input type="password" placeholder='password' className='input-long'></input>
        </div>
        <div className='input-long'> 
        <label>მობილური</label>
        <input type="phone" placeholder='5** ** ** **' className='input-long'></input>
        </div>
        <div className='input-long'></div>
        <label>რაზე ისურვებდით ფასდაკლებას?</label>
        </div>
        <div className='input-long'>
        <textarea></textarea>
        </div>
      <div className='register-form-button'> <button>რეგისტრაცია</button></div>
    </div>
  );
};

export default SignUpForm;
