import React, {useState,useEffect} from "react";
import piza from "../resources/images/piza.svg";
import {Link} from 'react-router-dom'
const Food = () => {
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
        const food = result.data.find(item => item.attributes.Name==="Food").attributes.products
        setProducts(food.data)
      })
      .catch(error => console.log('error', error));
  },[])
  return (
    <div
      className="main flex justify-center w-full "
      style={{ paddingLeft: "132px", paddingRight: "132px" }}
    >
      <div
        className="products-wrapper flex flex-wrap justify-center"
        style={{ maxWidth: "1440px" }}
      >
        <div
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
            src={piza}
            style={{ height: "69px", width: "69px", marginRight: "17px" }}
          />
          კვება
        </div>
        {products.length>0&&
        products.map(product=>(
          <Link to={':'+product.id} state={{ product }} key={product.id}>
        <div
          className="product-card bg-white"
          style={{
            width: "20.3rem",
            height: "32.4rem",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "0px 20px 20px 20px",
            marginRight: "90px",
          }}
        >
          <div className="card-img">
            <img src={product.attributes.coverUrl} />
          </div>
          <div
            className="card-logo flex justify-center"
            style={{ marginTop: "22px" }}
          >
            <img src={product.attributes.logoUrl} />
          </div>
          <div className="card-description flex flex-col items-center">
            <div
              className="description-header"
              style={{
                fontSize: "29px",
                fontWeight: "700",
                color: "black",
                marginTop: "23px",
              }}
            >
              {product.attributes.productName}
            </div>
            <div
              className="description-footer p-2"
              style={{
                fontSize: "19px",
                fontWeight: "700",
                color: "#8B8B8B",
                marginTop: "9px",
              }}
            >
              {product.attributes.description}

            </div>
          </div>
        </div>
        </Link>
        ))
        }
 
      </div>
    </div>
  );
};
export default Food;
