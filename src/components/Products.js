import React, { useState, useEffect } from "react";
import piza from "../resources/images/piza.svg";
import { Link } from "react-router-dom";
import Product from "./Product";
import styles from "./Products.module.css"
const Products = () => {
  const [products, setProducts] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch("https://studenthunt.herokuapp.com/api/products", requestOptions)
        .then((response) => response.json())
        .then((result) => setProducts(result.data))
        .catch((error) => console.log("error", error));
    }
  }, []);
  console.log(products);
  return (
    <div
      className="main flex justify-center w-full "
      style={{ paddingLeft: "132px", paddingRight: "132px" }}
    >
      <div
        className="products-wrapper flex flex-wrap justify-center"
        style={{ maxWidth: "1440px" }}
      >

        <div className={styles.productsWrapper}>
          {products.length > 0 &&
            products.map((product) => (
              <Link to={":" + product.id} state={{ product }} key={product.id}>
                <Product product={product} />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};
export default Products;
