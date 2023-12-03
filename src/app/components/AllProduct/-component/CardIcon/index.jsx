import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import styles from "../Card/index.module.css";

import CartContext from "@/contexts/CartContext";
import { useContext } from "react";

function Cardicon({ item }) {
  
  const {addCart}=useContext(CartContext)

  return (
    <div className={`d-flex flex-column ${styles.icons}`}>
      <div onClick={()=>addCart(item)} style={{cursor:"pointer"}}>
        <FontAwesomeIcon
          icon={faShoppingBasket}
          className={`fs-6 fw-bold m-0 p-3 rounded-circle ${styles.iconStyle}`}
        />
      </div>
      <Link href={`/products/${item.id}`}>
        <FontAwesomeIcon
          icon={faEye}
          className={`rounded-circle p-3 ${styles.iconStyle}`}
        />
      </Link>
    </div>
  );
}
export default Cardicon;
