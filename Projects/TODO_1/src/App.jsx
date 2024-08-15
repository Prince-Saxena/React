import AppName from "./components/AppName";
import Task from "./components/Taks";
import List from "./components/List";
function App() {
  const list = [
    {
      name: "Buy Milk",
      date: "22/10/23",
    },
    {
      name: "Go to college",
      date: "22/10/14",
    },
    {
      name: "Go to college",
      date: "22/10/14",
    },
  ];
  return (
    <div id="main">
      <center>
        <AppName></AppName>
        <Task></Task>
        {list.map((temp) => (
          <List todo={temp.name} date={temp.date} key={temp.name}></List>
        ))}
      </center>
    </div>
  );
}

export default App;
