import styles from "./Taks.module.css";
function Task() {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-5">
          <input
            type="text"
            name=""
            id={styles.inp1}
            placeholder="Enter Task"
          />
        </div>
        <div className="col-4">
          <input type="date" name="" id={styles.inp2} className="input" />
        </div>
        <div className="col-2">
          <button className={`${styles.btn} btn btn-primary`} id="bt">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default Task;
