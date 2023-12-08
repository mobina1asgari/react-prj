import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.css";

function Empty() {
  return (
    <div className={styles.emptyDiv}>
      <FontAwesomeIcon icon={faCartShopping} className={styles.cartShopping} />
      <p style={{marginBottom:"40px"}}>No items found in cart</p>
      
      <a href="/Shop/" className={styles.tabelBtn}>
        Shop Now
      </a>
    </div>
  );
}

export default Empty;
