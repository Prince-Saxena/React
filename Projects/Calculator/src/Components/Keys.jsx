import Key from "./Key";

export default function Keys() {
  let keys = [
    ["9", "8", "7", "C"],
    ["6", "5", "4", "/"],
    ["3", "2", "1", "x"],
    ["0", ".", "-", "+"],
  ];
  const cal = () => {};
  return (
    <div className="keys">
      {keys.map((item, index) => (
        <div key={index} className="row">
          {item.map((temp) => (
            <Key itm={temp} key={temp}></Key>
          ))}
        </div>
      ))}
      <button className="btn btn-primary col-12 " onClick={cal}>
        ENTER
      </button>
    </div>
  );
}
