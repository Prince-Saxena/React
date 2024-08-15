import PropTypes from "prop-types";
export default function Key({ itm }) {
  return <button className="col-2 m-2 btn border-primary ">{itm}</button>;
}
Key.propTypes = {
  itm: PropTypes.string.isRequired, // Ensure itm is a required string
};
