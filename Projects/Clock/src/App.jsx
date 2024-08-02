import "./App.css";

function App() {
  let date = new Date();
  return (
    <center>
      <h1>Bharat Clock</h1>
      <p>Date{date.toLocaleDateString}</p>
    </center>
  );
}

export default App;
