import { useContext } from "react";
import styles from "./index.module.css"
import CartContext from "@/contexts/CartContext";
import FullCart from "./-component/FullCart/FullCart";
import Empty from "./-component/Empty/Empty";

function ViweCart() {
  const { cart } = useContext(CartContext);
  return <div className={styles.viwe}>{cart.length !=0 ? <FullCart /> : <Empty />}</div>;
}

export default ViweCart;
