import styles from "./List.module.css";
import PropTypes from "prop-types";
export default function List({ todo, date }) {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-5">{todo}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button className={`${styles.btn} btn btn-danger`} id="bt">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
List.propTypes = {
  todo: PropTypes.node,
  date: PropTypes.node,
};
