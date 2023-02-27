import React, {useState,useEffect} from "react";
import tech from "../resources/images/technic.svg";
import {Link} from 'react-router-dom'
import Product from "./Product";
import styles from "./Products.module.css"
const Technic = () => {
  const [products,setProducts] = useState([])
  const token = localStorage.getItem("token")
  useEffect(()=>{
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`)
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("https://studenthunt.herokuapp.com/api/categories?populate=*", requestOptions)
      .then(response => response.json())
      .then(result => {
        const food = result.data.find(item => item.attributes.Name==="Tech").attributes.products
        setProducts(food.data)
      })
      .catch(error => console.log('error', error));
  },[])
  console.log(products)
  return (
    <div
      className="main flex justify-center w-full "
      style={{ paddingLeft: "132px", paddingRight: "132px" }}
    >
      <div
        className="products-wrapper flex flex-wrap justify-center"
        style={{ maxWidth: "1440px" }}
      >
        {/* <div
          className="main-header w-full flex items-center"
          style={{
            fontSize: "47px",
            fontWeight: "700",
            paddingLeft: "132px",
            marginBottom: "104px",
            marginTop: "79px",
          }}
        >
          <img
            src={tech}
            style={{ height: "69px", width: "69px", marginRight: "17px" }}
          />
          ტექნიკა
        </div> */}
        <div className={styles.productsWrapper}>
        {products.length>0&&
        products.map(product=>(
          <Link to={':'+product.id} state={{ product }} key={product.id}>
            <Product product={product}/>
        </Link>
        ))
        }
 </div>
      </div>
    </div>
  );
};
export default Technic;
