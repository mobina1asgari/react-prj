import { useContext } from "react";
import styles from "./order.module.css";
import CartContext from "@/contexts/CartContext";
function Order() {
  const { cart,total } = useContext(CartContext);
  return (
    <div className={styles.order}>
      <h3 className="fs-5">Your order</h3>
      <div className={styles.orderDiv}>
        <div className={styles.topOrder}>
          <ul
            className="d-flex justify-content-between"
            style={{ fontWeight: 500 }}
          >
            <li>Product</li>
            <li>Total</li>
          </ul>
        </div>
        <div className={styles.middelOrder}>
          <ul>
            {cart.map((item) => {
              return (
                <li className="d-flex align-items-end justify-content-between mb-3" key={item.id}>
                  <span className={styles.orderMiddleL}>
                  {item.title}X{item.qty}
                  </span>
                  <span className="order-price">€{item.price * item.qty}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.bottomOrder}>
          <ul className="d-flex justify-content-between">
            <li className="your-order-shipping">Shipping</li>
            <li>Free shipping</li>
          </ul>
        </div>
        <div className={styles.totalOrder}>
          <ul className="d-flex justify-content-between">
            <li style={{ fontSize: "18px" }}>Total</li>
            <li className={styles.PriceOrder}>{parseFloat(total).toFixed(2) }</li>
          </ul>
        </div>
      </div>
      <div>
        <button className={styles.placeOrder}>Place Order</button>
      </div>
    </div>
  );
}

export default Order;
