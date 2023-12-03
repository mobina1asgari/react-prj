import styles from "../index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useContext } from "react";
import CartContext from "@/contexts/CartContext";

function CartDetail({ item }) {
    const {removeCart}=useContext(CartContext)
  return (
    <div className="d-flex justify-content-between pb-3 mb-4 border-bottom">
      <div>
        <Link href={`/products/${item.id}`}>
          <img src={item.image} alt="" className={styles.img} />
        </Link>
      </div>
      <div>
        <Link href={`/products/${item.id}`}>
          <h4 className={`fs-6 ${styles.title}`}>{item.title}</h4>
        </Link>
        <h6 style={{ fontSize: 13 }}>Qty : {item.qty}</h6>
        <span style={{ fontSize: 14 }}>${item.price} </span>
      </div>
      <div>
        <button className={styles.close}>
          <FontAwesomeIcon icon={faTimesCircle} onClick={()=>removeCart(item)}/>
        </button>
      </div>
    </div>
  );
}

export default CartDetail;
