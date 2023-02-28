import React,{useState,useEffect} from "react";
import { useLocation } from "react-router-dom";
import styles from "./ProductPage.module.css";
import { sendEmail } from "./sendEmail";
import TimestampConverter from "./TimeStampConverter";
const ProductPage = (props) => {
  const [showCode,setShowCode]=useState(false)
  let state = useLocation();
  const showLogin = props.showLogin
  const setShowLogin = props.setShowLogin
  const product = state.state.product.attributes;
  const token = localStorage.getItem('token')
  const [randomCode,setRandomCode]=useState('')
  const handleClick=(e)=>{
    setShowLogin(prevState =>!prevState)
  }
  const handleGetCode = ()=>{
    setShowCode(true)
     setRandomCode(Math.floor(100000 + Math.random() * 900000));
     const to = 'gocha.berulava@gmail.com'
     const subject = 'code'
     const text = 'sdad'
     sendEmail(to,subject,text)
  }
  return (
    
    <div className="flex justify-center flex-col items-center bg-white p-6">
      <div>{product.company}</div>
      <div
        style={{
          background: `url(${product.coverUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={styles.cover}
      ></div>

      <div className={styles.info}>
        <div className={styles.productName}>{product.productName}   {product.description}</div>
    
        <div><TimestampConverter timestamp={Date.parse(product.endDate)}/></div>
      </div>
      {token? <div className={styles.getCode} onClick={handleGetCode}>კოდის მიღება</div>:<div className={styles.register}>გთხოვთ გაიარეთ <button onClick={handleClick}>ავტორიზაცია</button></div>}
      {showCode && <div>
          თქვენი კოდია : {randomCode}
          <p>კოდი გამოგზავნილია თქვენს იმეილზე</p>
        </div>}
    </div>
  );
};
export default ProductPage;
