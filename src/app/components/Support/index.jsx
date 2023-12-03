import Support2 from "./-component/Support2";
import Support3 from "./-component/Support3";
import Support4 from "./-component/Support4";
import Support1 from "./-component/support1";
import styles from "./index.module.css"

function Support() {
  return (
    <div className="container">
      <div className={`d-flex justify-content-around ${styles.support}`}>
        <Support1 />
        <Support2 />
        <Support3 />
        <Support4/>
      </div>
    </div>
  );
}

export default Support;
