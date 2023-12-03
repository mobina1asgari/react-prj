import style from "./index.module.css"
function Section1() {
  return (
    <div className="mx-3">
      <img src="/img/logo.png" alt="" className="mb-3"/>
      <p className="my-1">
        © 2023
        <a href="#" className={style.footerLink}> Flone.</a>    
      </p>
      <p className="my-1">
        All Rights Reserved
      </p>
    </div>
  );
}
export default Section1;
