import styles from "./index.module.css";
import { useContext } from "react";
import CartContext from "@/contexts/CartContext";
import TableItem from "./TableItem";
import Table from "react-bootstrap/Table";
import Link from "next/link";

function TableCart() {
  const { clearCart, cart } = useContext(CartContext);

  return (
    <div className={`container`}>
      <h3 className="fs-5 mb-3">Your cart items</h3>
      <div>
        <Table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.tableTh}>IMAGE</th>
              <th className={styles.tableTh}>PRODUCT NAME</th>
              <th className={styles.tableTh}>UNIT PRICE</th>
              <th className={styles.tableTh}>QTY</th>
              <th className={styles.tableTh}>SUBTOTAL</th>
              <th className={styles.tableTh}>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => {
              return <TableItem item={item} key={item.id} />;
            })}
          </tbody>
        </Table>
      </div>
      <div className={`d-flex justify-content-between ${styles.btnDiv}`}>
        <Link href="/Shop/" className={styles.tabelBtn}>
          Continue Shopping
        </Link>
        <button className={styles.tabelBtn} onClick={clearCart}>
          Clear Shopping Cart
        </button>
      </div>
    </div>
  );
}

export default TableCart;
