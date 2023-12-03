import styles from "../../index.module.css";
import "bootstrap/dist/css/bootstrap.css";
function Slide2() {
  return (
    <div className="d-flex align-items-center">
      <div className={styles.leftslide1}>
        <h3>Smart Products</h3>
        <h1 className={styles.slideTitle}>
          Summer Offer
          <br />
          2024 Collection
        </h1>
        <button className={`${styles.shopBtn}`}>
          SHOP NOW
        </button>
      </div>
      <div>
        <img src="./img/slide02.jpg" alt="" />
      </div>
    </div>
  );
}
export default Slide2;
