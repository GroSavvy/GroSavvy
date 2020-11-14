import React from "react";
import { useData } from "../data/dataProvider"

export default function ShoppingList() {
  const { items, myLists, addNewList, clearMyLists, quantity } = useData()

  const addItem = (e) => {
    e.preventDefault();
    addNewList({product: e.target.value, quantity: 1});
  };

  const clear = (e) => {
    e.preventDefault();
    clearMyLists();
  };

  function getAvePrice(stockInfo) {    
    var sum = 0
    for (var i = 0; i < stockInfo.length; i++) {
      sum += stockInfo[i].price
    }
    var avg = sum/stockInfo.length
    return avg
  }


  return (
    <div className="shoppinglist">
      <div>{JSON.stringify(myLists)}</div>  
      <ul className="products">
        {items.map(item => (
          <li key={item.id}>
            <div className="product">
              <img
                src={item.img_src}
                alt={item.name}>
              </img>
              <h2>{item.name.toUpperCase()}</h2>
              <span>Approx. <h1>${getAvePrice(item.stockInfo)}</h1>/{item.metric}</span>
              <form>
                <label htmlFor="quantity">Quantity:</label>
                <input type="number" id="quantity" name="quantity" min="1" max="99" />
                <button type="submit" value = {item.name}  onClick={addItem}>Add to Cart</button>
              </form>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
