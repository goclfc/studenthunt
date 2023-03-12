import React, { useState, useEffect } from "react";
import piza from "../resources/images/piza.svg";
import { Link } from "react-router-dom";
import Product from "./Product";
import styles from "./Products.module.css"
const Products = () => {
  const [products, setProducts] = useState([]);
  const viewToken ="2d2e594e8d957841f22355d81342883269555efa56005ac0ef9ad3733063762172696820620b331068e3a8b7cf96f77882f61ea187d71c73ea0367b913b28014c84da44d4e5059750a7af0b7070c017b7bfa721f6c9adf70f905932d92a16ea0f890372efd6559b61b0d2ecf487dbeca78ee99f2243a3e6c47543bce6336d86b"
  const token = localStorage.getItem("token")||viewToken;
  console.log(token)
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
        .catch((error) => {
          console.log("error", error)
          localStorage.removeItem('token')
          localStorage.removeItem('user')
          window.location.reload(false)
        });
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
              <Link to={"product/" + product.attributes.company} state={{ product }} key={product.id}>
                <Product product={product} />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};
export default Products;
