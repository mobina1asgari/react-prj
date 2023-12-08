import styles from "./index.module.css";
import CartContext from "@/contexts/CartContext";
import Link from "next/link";
import { useContext } from "react";

function Total() {
    const { total } = useContext(CartContext);
  return (
    <div className="d-flex container justify-content-between align-items-baseline" style={{marginBottom:100}}>
      <div className={`${styles.totalDiv}`}>
        <div className={`${styles.totalTitle2} position-relative`}>
          <h4 className={styles.titleCart}>Estimate Shipping And Tax</h4>
        </div>
        <p className="mb-3 mt-4">
          Enter your destination to get a shipping estimate.
        </p>
        <div>
          <div className="mb-4">
            <label className="mb-1">* Country</label>
            <select
              className={`form-select outline-0 rounded-0 ${styles.select}`}
            >
              <option value="0">Bangladesh</option>
              <option value="1">Albania</option>
              <option value="2">Åland Islands</option>
              <option value="3">Afghanistan</option>
              <option value="4">Belgium</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="mb-1">* Region / State</label>
            <select
              className={`form-select outline-0 rounded-0 ${styles.select}`}
            >
              <option value="0">Bangladesh</option>
              <option value="1">Albania</option>
              <option value="2">Åland Islands</option>
              <option value="3">Afghanistan</option>
              <option value="4">Belgium</option>
            </select>
          </div>
          <div>
            <label className="mb-1">* Zip/Postal Code</label>
            <input
              type="text"
              required
              name="name"
              className={styles.coponInput}
            ></input>
          </div>
        </div>
        <a className={styles.check} style={{ width: "60%" }}>
          GET A QUOTE
        </a>
      </div>
      <div className={`${styles.totalDiv}`}>
        <div className={`${styles.totalTitle1} position-relative`}>
          <h4 className={styles.titleCart}>Use Coupon Code</h4>
        </div>
        <p className="mb-3 mt-4">Enter your coupon code if you have one.</p>
        <form>
          <input
            type="text"
            required
            name="name"
            className={styles.coponInput}
          />
          <a className={styles.check} style={{ width: "60%" }}>
            Apply Coupon
          </a>
        </form>
      </div>
      <div className={`${styles.totalDiv}`}>
        <div className={`${styles.totalTitle}  position-relative`}>
          <h4 className={styles.titleCart}>Cart Total</h4>
        </div>
        <h5
          className="d-flex justify-content-between"
          style={{ margin: "36px 0 27px" }}
        >
          Total products <span>{parseFloat(total).toFixed(2)}</span>
        </h5>
        <h4 className={`${styles.grandTitle} d-flex justify-content-between`}>
          Grand Total <span>{parseFloat(total).toFixed(2)}</span>
        </h4>
        <Link href="/Checkout/" className={styles.check}>
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}
export default Total;
