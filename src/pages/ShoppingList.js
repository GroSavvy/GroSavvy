import React from "react";
import { useData } from "../data/dataProvider"

export default function ShoppingList() {
  const { items } = useData()
  function getAvePrice(stockInfo) {    
    var sum = 0
    for (var i = 0; i < stockInfo.length; i++) {
      sum += stockInfo[i].price
    }
    var avg = sum/stockInfo.length
    return avg
  }

  return (
    <div>
    
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <div>
              <img className="product-image"
                src={item.img_src}
                alt="product">
              </img>
              <h1>{item.name.toUpperCase()}</h1>
              <h1>${getAvePrice(item.stockInfo)}/{item.metric}</h1>
              <form>
                <label htmlFor="quantity">Quantity:</label>
                <input type="number" id="quantity" name="quantity" min="1" max="99" />
                <input type="submit" value = "Add to cart" />
              </form>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
