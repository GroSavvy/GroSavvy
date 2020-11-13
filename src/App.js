import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import PriceMatch from "./pages/PriceMatch";
import ShoppingList from "./pages/ShoppingList";
import MyLists from "./pages/MyLists";
import { useData } from "./data/dataProvider";

function App() {
  const { myLists, addNewList, clearMyLists } = useData();
  const submit = (e) => {
    e.preventDefault();
    addNewList([1, 2, 3, 4]);
  };
  const delet = (e) => {
    e.preventDefault();
    clearMyLists();
  };

  return (
    <div className="App">
      <div>{JSON.stringify(myLists)}</div>
      <form onSubmit={submit}>
        <button>ADD</button>
      </form>
      <form onSubmit={delet}>
        <button>Delete</button>
      </form>

      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="pricematch" element={<PriceMatch />}/>
        <Route path="shoppinglist" element={<ShoppingList />} />
        <Route path="mylists" element={<MyLists />} />
      </Routes>
    </div>
  );
}

export default App;
