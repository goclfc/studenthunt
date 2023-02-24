import { useLocation } from "react-router-dom";
import styles from "./ProductPage.module.css";
const ProductPage = (props) => {
  let state = useLocation();
  const product = state.state.product.attributes;
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
      <div className={styles.logo}>
        <img src={product.logoUrl} />
      </div>
      <div className={styles.info}>
        <div>{product.productName}</div>
        <div>{product.description}</div>
        <div>{product.endDate}</div>
      </div>
      <div>კოდის მიღება</div>
    </div>
  );
};
export default ProductPage;
