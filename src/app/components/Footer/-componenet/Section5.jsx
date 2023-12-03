import style from "./index.module.css";
function Section5() {
  return (
    <div className={style.footerSection}>
      <h3 className="fs-6 mb-3">SUBSCRIBE</h3>
      <p>
        <a href="#" className={`${style.footerLink} ${style.linkStyle}`}>
          Get E-mail updates about our latest shop 
          <br></br>
          and special offers.
        </a>

      </p>
    </div>
  );
}
export default Section5;
