import React, { useState } from 'react';
import styles from './Form.module.css'
const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const handleEmail = (e)=>{
    const email = e.target.value
    if(email.endsWith("@edu.ge")){
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
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
            <label>
        Username:
        <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email"  onBlur={handleEmail} />
      </label>
      {email==='No student mail' && <p>გთხოვთ შეიყვანეთ სტუდენტის აქტიური მეილი</p>}
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      {
      
      email!=="No student mail"&&email.length>0&&password.length>5&& <button type="submit">Sign up</button>
      }
    </form>
  );
};

export default SignUpForm;
