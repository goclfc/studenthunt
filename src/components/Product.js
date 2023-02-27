import TimestampConverter from "./TimeStampConverter";
import styles from "./Product.module.css";
const Product = (props) => {
  const product = props.product;
  return (
    <div className={styles.productWrapper}>
      <div className={styles.prodImg}>
        <img src={product.attributes.coverUrl} />
      </div>
      <div className={styles.prodLogo}>
        <img src={product.attributes.logoUrl} />
      </div>
      <div className={styles.descriptionWrapper}>
        <div className={styles.productName}>{product.attributes.productName}</div>
        <div className={styles.prodDescription}>{product.attributes.description}</div>
        <div className={styles.timeStamp}>
          <TimestampConverter
            timestamp={Date.parse(product.attributes.endDate)}
          />
        </div>
      </div>
    </div>
  );
};
export default Product;
