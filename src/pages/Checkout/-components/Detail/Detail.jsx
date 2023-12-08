import styles from "./detail.module.css";
import DetailForm from "./DetailForm";

function Detail() {
  const array = [
    "First Name",
    "Last Name",
    "Company Name",
    "Town / City",
    "State / County",
    "Postcode / ZIP",
    "Phone",
    "Email Address",
  ];
  const newArr1 = array.slice(0, 3);
  const newArr2 = array.slice(3);

  return (
    <div className={styles.billingWrap}>
      <h3 className={styles.billTitle}>Billing Details</h3>
      {newArr1.map((item, index) => {
        return <DetailForm key={index} item={item} />;
      })}
      <div style={{ marginBottom: "20px" }}>
        <label className="mb-2">Country</label>
        <select className={`form-select rounded-0 ${styles.billingSelect}`}>
          <option value={0}>Select a country</option>
          <option value={1}>Azerbaijan</option>
          <option value={2}>Bahamas</option>
          <option value={3}>Bahrain</option>
          <option value={4}>Bangladesh</option>
          <option value={5}>Barbados</option>
        </select>
      </div>
      <div className={styles.billingInfo}>
        <labe>Street Address</labe>
        <input
          className="my-2"
          placeholder="House number and street name"
          type="text"
        />
        <input placeholder="Apartment, suite, unit etc." type="text" />
      </div>
      {newArr2.map((item, index) => {
        return <DetailForm key={index} item={item} />;
      })}
      <div>
        <h4 className="fs-6">Additional information</h4>
        <label className="mb-2" style={{ fontSize: "14px" }}>
          Order notes
        </label>
        <textarea
          placeholder="Notes about your order, e.g. special notes for delivery. "
          name="message"
          className={styles.placeholder}
        ></textarea>
      </div>
    </div>
  );
}

export default Detail;
