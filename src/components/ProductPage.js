import React,{useState,useEffect} from "react";
import { useLocation } from "react-router-dom";
import styles from "./ProductPage.module.css";
import { sendEmail } from "./sendEmail";
import TimestampConverter from "./TimeStampConverter";
import { useFetchedData } from "../services/HttpServices";
const ProductPage = (props) => {
  const [showCode,setShowCode]=useState(false)
  let state = useLocation();
  let path = state.pathname.split('')
  path.shift()
  
  const pathname = path.join('')
  const product =useFetchedData(pathname)
  const coverUrl = product?.attributes?.cover.data.attributes.url

  const token = localStorage.getItem('token')
  const [randomCode,setRandomCode]=useState('')
  const handleClick=(e)=>{
    // setShowLogin(prevState =>!prevState)
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
      <div className={styles.company}>{product.company}</div>
      <div
          className={styles.cover}
        style={{
          background: `url(${coverUrl})`,
 
        }}
      ></div>

      <div className={styles.info}>
        <div className={styles.productName}>{product.productName}   {product.description}</div>
    
    
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
