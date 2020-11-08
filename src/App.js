import "./App.css";
import { useData } from "./data/dataProvider";

function App() {
  const { items, stores } = useData();
  return (
    <div className="App">
      {items.map((item) => {
        return (
          <div>
            {item.name}
            <br />
            {item.keyWords}
          </div>
        );
      })}
      {stores.map((store) => {
        return (
          <div>
            {store.brand}
            <br />
            {store.location}
          </div>
        );
      })}
    </div>
  );
}

export default App;
