import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBills } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.css";
function Empty() {
  return (
    <div className={styles.emptyDiv}>
      <FontAwesomeIcon icon={faMoneyBills} className={styles.cartShopping} />
      <p style={{ marginBottom: "40px",fontSize:"20px" }}>No items found in cart to checkout</p>
      <a href="/Shop/" className={styles.tabelBtn}>
        Shop Now
      </a>
    </div>
  );
}
export default Empty;
