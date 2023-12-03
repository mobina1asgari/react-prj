import style from "./index.module.css"
function Section2() {
  return (
    <div  className={style.footerSection}>
      <h3 className="fs-6 mb-3">ABOUT US</h3>
      <ul className={style.footerUl}>
        <li className={style.liStyle}>
          <a href="#" className={`${style.footerLink} ${style.linkStyle}`}>About us</a>
        </li>
        <li className={style.liStyle}>
          <a href="#" className={`${style.footerLink} ${style.linkStyle}`}>Store location</a>
        </li>
        <li className={style.liStyle}>
          <a href="#" className={`${style.footerLink} ${style.linkStyle}`}>Contact</a>
        </li>
        <li className={style.liStyle}>
          <a href="#" className={`${style.footerLink} ${style.linkStyle}`}>Orders tracking</a>
        </li>
      </ul>
    </div>
  );
}
export default Section2;
