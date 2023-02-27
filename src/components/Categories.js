import sunglasses from "../resources/images/sunglasses.svg";
import entertain from "../resources/images/entertain.svg";
import sport from "../resources/images/sport.svg";
import technic from "../resources/images/technic.svg";
import trousers from "../resources/images/trousers.svg";
import piza from "../resources/images/piza.svg";
import { Link } from "react-router-dom";
import styles from "./Categories.module.css";
const Categories = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.categories}>
        <div className={styles.categoriesList}>
          <Link to="accesories">
            <div className={styles.categorie}>
              <div>
                <img src={sunglasses} />
              </div>
            </div>
              <div className={styles.categorieName}>აქსესუარები</div>
          </Link>
          <Link to="food">
            <div className={styles.categorie}>
              <div>
                <img src={piza} />
              </div>

            </div>
              <div className={styles.categorieName}>კვება</div>
          </Link>
          <Link to="dress">
            <div className={styles.categorie}>
              <div>
                <img src={trousers} />
              </div>
            </div>
              <div className={styles.categorieName}>ტანსაცმელი</div>
          </Link>
          <Link to="sport">
            <div className={styles.categorie}>
              <div>
                <img src={sport} />
              </div>
            </div>
              <div className={styles.categorieName}>სპორტი</div>
          </Link>
          <Link to="entertainment">
            <div className={styles.categorie}>
              <div>
                <img src={entertain} />
              </div>
            </div>
              <div className={styles.categorieName}>გართობა</div>
          </Link>
          <Link to="technic">
            <div className={styles.categorie}>
              <div>
                <img src={technic} />
              </div>
            </div>
              <div className={styles.categorieName}>ტექნიკა</div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Categories;
