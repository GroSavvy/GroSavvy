import "./App.css";
import { useData } from "./data/dataProvider";
import { useEffect } from "react";

function App() {
  const { items, stores, currentLists, createNewList } = useData();
  console.log(items);
  console.log(stores);
  useEffect(()=>createNewList([{ a: 1, b: 2 }]), []);
  console.log(currentLists);
  return <div className="App"></div>;
}

export default App;
