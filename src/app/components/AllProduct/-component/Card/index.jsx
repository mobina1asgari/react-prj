import Link from "next/link";
import Cardicon from "../CArdIcon";
import styles from "./index.module.css";

function Card({ item }) {

  return (
    <div
      className={` flex-column  mx-2 my-3 card border-0 ${styles.cardStyle} ${styles.flex}`}
    >
      <Link href={`/products/${item.id}`}>
        <div className={styles.title}>
          <div className="position-relative">
            <img
              src={item.image}
              className={`${styles.itemImg} card-img-top`}
            ></img>
          </div>
        </div>
          <h3 className={styles.cardTitle}>{item.title}</h3>
      </Link>
        <p>{item.price}$</p>
      <Cardicon item={item} />
     
    </div>
  );
}
export default Card;
