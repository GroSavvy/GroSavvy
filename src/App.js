import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import PriceMatch from "./pages/PriceMatch";
import ShoppingList from "./pages/ShoppingList";
import MyLists from "./pages/MyLists";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="pricematch" element={<PriceMatch />} />
        <Route path="shoppinglist" element={<ShoppingList />} />
        <Route path="mylists" element={<MyLists />} />
      </Routes>
    </div>
  );
}

export default App;
