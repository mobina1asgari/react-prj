import styles from "./index.module.css";
import Slide1 from "./-component/Slide1";
import Slide2 from "./-component/Slide2";


function Slider() {
  return (
    //  data-bs-ride="carousel" don't work
    <div className="carousel slide carousel-dark" id="slider">
      <div className="carousel-inner">
        <div className={`carousel-item  w-100  ${styles.slider}`}>
          <Slide1 />
        </div>
        <div className={`carousel-item active w-100  ${styles.slider}`}>
          <Slide2/>
        </div>
        <button
          className="carousel-control-prev"
          data-bs-target="#slider"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          data-bs-target="#slider"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  );
}

export default Slider;
