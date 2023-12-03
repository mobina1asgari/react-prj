import style from "./index.module.css"
function Section3() {
  return (
    <div  className={style.footerSection}>
      <h3 className="fs-6 mb-3">USEFUL LINKS</h3>
      <ul className={style.footerUl}>
        <li className={style.liStyle}>
          <a href="#" className={`${style.footerLink} ${style.linkStyle}`}>Returns</a>
        </li>
        <li className={style.liStyle}>
          <a href="#" className={`${style.footerLink} ${style.linkStyle}`}>Support Policy</a>
        </li>
        <li className={style.liStyle}>
          <a href="#" className={`${style.footerLink} ${style.linkStyle}`}>Size guide</a>
        </li>
        <li className={style.liStyle}>
          <a href="#" className={`${style.footerLink} ${style.linkStyle}`}>FAQs</a>
        </li>
      </ul>
    </div>
  );
}
export default Section3;
