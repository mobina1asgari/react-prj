import style from "./index.module.css"
function Section4() {
  return (
    <div  className={style.footerSection}>
      <h3 className="fs-6 mb-3">FOLLOW US</h3>
      <ul className={style.footerUl}>
        <li className={style.liStyle}>
          <a href="#" className={`${style.footerLink} ${style.linkStyle}`}>Facebook</a>
        </li>
        <li className={style.liStyle}>
          <a href="#" className={`${style.footerLink} ${style.linkStyle}`}>Twitter</a>
        </li>
        <li className={style.liStyle}>
          <a href="#" className={`${style.footerLink} ${style.linkStyle}`}>Instagram</a>
        </li>
        <li className={style.liStyle}>
          <a href="#" className={`${style.footerLink} ${style.linkStyle}`}>Youtube</a>
        </li>
      </ul>
    </div>
  );
}
export default Section4;
