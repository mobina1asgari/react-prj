import { useContext } from "react";
import Detail from "./-components/Detail/Detail";
import Order from "./-components/Order/Order";
import styles from "./index.module.css";
import CartContext from "@/contexts/CartContext";
import Empty from "./-components/Empty";

function Checkout() {
  const { cart } = useContext(CartContext);
  return (
    <div>
      {cart.length != 0 ? (
        <div className={`${styles.CheckoutDiv} container`}>
          <Detail />
          <Order />
        </div>
      ) : (
        <Empty />
      )}
    </div>
  );
}

export default Checkout;
