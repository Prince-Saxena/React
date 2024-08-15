import Display from "./Components/Display";
import "./App.css";
import Keys from "./Components/Keys";
function App() {
  const cal = (str) => {
    let result;
    try {
      result = eval(str);
      result.toString();
    } catch {
      console.log("Error");
    }
  };
  const setter = (str) => {
    this.value = str;
  };
  return (
    <div className="container">
      <div className="calculator">
        <h1 className="text-center h1">Calculator</h1>
        <Display></Display>
        <Keys></Keys>
      </div>
    </div>
  );
}

export default App;
