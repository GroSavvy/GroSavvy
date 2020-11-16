import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import PriceMatch from "./pages/PriceMatch";
import ShoppingList from "./pages/ShoppingList";
import MyLists from "./pages/MyLists";
import ListCompare from "./pages/ListCompare";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<ShoppingList />} />
        <Route path="pricematch" element={<PriceMatch />} />
        <Route path="shoppinglist" element={<ShoppingList />} />
        <Route path="listcompare/:id" element={<ListCompare />} />
        <Route path="mylists" element={<MyLists />} />
      </Routes>
    </div>
  );
}

export default App;
