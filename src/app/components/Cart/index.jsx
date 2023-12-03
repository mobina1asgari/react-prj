import { forwardRef, useContext } from "react";
import styles from "./index.module.css";
import "./index.css";
import CartContext from "@/contexts/CartContext";
import CartDetail from "./-components/CartDetail";

const Cart = forwardRef(function Cart({ props }, ref) {
  const { cart, cartFlag ,total} = useContext(CartContext);

  return (
    <div className={`${styles.cartStyle} position-absolute`} ref={ref}>
      {cartFlag ? (
        <>
          <div className={styles.cartDiv}>
            {cart.map((item, index) => {
              return (
                <div>
                  <CartDetail key={index} item={item} />
                </div>
              );
            })}
          </div>
          <div className={styles.shopTotal}>
            <h4 className="fs-6 d-flex justify-content-between">
              Total : <span>€ {total}</span>
            </h4>
          </div>
          <button className={styles.shopBtn}>view cart</button>
        </>
      ) : (
        <div>
          <p className="text-center m-0">No items added to cart</p>
        </div>
      )}
    </div>
  );
});
export default Cart;
