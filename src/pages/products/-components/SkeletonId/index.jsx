import styles from "./index.module.css";

function SkeletonId() {
  return (
    <div className={`container ${styles.skeletonPadding}`}>
      <div className="d-flex justify-content-around">
        <div className={styles.skeletonStyle}>
          <span className={`${styles.skeletonImg} placeholder col-2 `}></span>
        </div>
        <div className={`card-body px-0 ${styles.info}`}>
          <h5 className="card-title placeholder-glow ">
            <span className="placeholder w-75"></span>
          </h5>
          <p className="card-text placeholder-glow m-0">
            <span className="placeholder w-25 placeholder-sm"></span>
            <span className="placeholder w-50 placeholder-sm"></span>
            <span className="placeholder w-50 placeholder-sm"></span>
            <span className="placeholder w-75 placeholder-sm"></span>
            <span className="placeholder w-50 placeholder-sm"></span>
            <span className="placeholder w-50 placeholder-sm"></span>
            <span className="placeholder w-75 placeholder-sm"></span>
            <span className="placeholder w-50 placeholder-sm"></span>
            <span className="placeholder w-25 placeholder-sm"></span>
            <span className="placeholder w-50 placeholder-sm"></span>
            <span className="placeholder w-50 placeholder-sm"></span>
            <span className="placeholder w-75 placeholder-sm"></span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default SkeletonId;
