function Display() {
  return (
    <input
      type="text"
      className="form-control display"
      onChange={(event) => console.log(event.target.value)}
    />
  );
}
export default Display;
