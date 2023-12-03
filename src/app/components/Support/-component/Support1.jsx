import styles from "../index.module.css"

function Support1() {
  return (
    <div className="d-flex">
      <div>
        <img src="./img/support-1.png"  className={styles.icon}/>
      </div>
      <div>
        <h5>Free Shipping</h5>
        <p>Free shipping on all order</p>
      </div>
    </div>
  );
}
export default Support1;
