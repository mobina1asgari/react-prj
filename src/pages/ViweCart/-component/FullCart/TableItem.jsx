import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.css";
import CartContext from "@/contexts/CartContext";
import { useContext } from "react";
import Link from "next/link";

function TableItem({ item }) {
  const { removeCart, pluseHandler, minusHandler } = useContext(CartContext);

  return (
    <>
      <tr className="bg-white">
        <td className={styles.tdItem}>
          <Link href={`/products/${item.id}`}>
            <img src={item.image} alt="" className={styles.img} />
          </Link>
        </td>
        <td className={`${styles.tdItem} ${styles.title}`}>
          <Link href={`/products/${item.id}`}>{item.title}</Link>
        </td>
        <td className={styles.tdItem}>{item.price}</td>
        <td className={styles.tdInput}>
          <button className={styles.btn} onClick={() => minusHandler(item)}>
            -
          </button>
          <input
            className={styles.input}
            type="text"
            readOnly
            value={item.qty}
          />
          <button className={styles.btn} onClick={() => pluseHandler(item)}>
            +
          </button>
        </td>
        <td className={styles.tdItem}>
          {parseFloat(item.price * item.qty).toFixed(2)}
        </td>
        <td className={styles.tdItem}>
          <button
            className="bg-transparent border-0"
            onClick={() => removeCart(item)}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </td>
      </tr>
    </>
  );
}
export default TableItem;
