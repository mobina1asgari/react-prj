import styles from "./index.module.css";

function Skeleton() {
  return (
    <div className="container d-flex justify-content-center">
      <div className={styles.skeletonStyle}>
        {Array.from({ length: 8 }).map((item,index) => {
          return (
            <div className={`card border-0 `} aria-hidden="true" key={index}>
              <span
                className={`${styles.skeletonImg} placeholder col-2 `}
              ></span>
              <div className="card-body px-0">
                <h5 className="card-title placeholder-glow ">
                  <span className="placeholder col-10"></span>
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-6 placeholder-sm"></span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Skeleton;
