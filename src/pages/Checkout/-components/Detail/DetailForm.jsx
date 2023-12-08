import styles from "./detail.module.css";

function DetailForm({item}) {
  return (
    <div className={styles.billingInfo}>
      <label className="mb-2">{item}</label>
      <input type="text" />
    </div>
  );
}
export default DetailForm