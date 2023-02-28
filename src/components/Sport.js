import React, {useState,useEffect} from "react";
import sport from "../resources/images/sport.svg";
import {Link} from 'react-router-dom'
import Product from "./Product";
import styles from "./Products.module.css"
const Sport = () => {
  const [products,setProducts] = useState([])
  const viewToken ="2d2e594e8d957841f22355d81342883269555efa56005ac0ef9ad3733063762172696820620b331068e3a8b7cf96f77882f61ea187d71c73ea0367b913b28014c84da44d4e5059750a7af0b7070c017b7bfa721f6c9adf70f905932d92a16ea0f890372efd6559b61b0d2ecf487dbeca78ee99f2243a3e6c47543bce6336d86b"
  const token = localStorage.getItem("token")||viewToken;
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
        const food = result.data.find(item => item.attributes.Name==="Sports").attributes.products
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
            src={sport}
            style={{ height: "69px", width: "69px", marginRight: "17px" }}
          />
          სპორტი
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
export default Sport;
