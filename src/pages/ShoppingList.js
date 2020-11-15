import React, { useState } from "react";
import { useData } from "../data/dataProvider";

export default function ShoppingList() {
  const { items, myLists, addNewList, clearMyLists } = useData();
  const [ list, setList] = useState({});


  const addItem = (e, item_id) => {
    e.preventDefault();
    var a = parseInt(document.getElementById(item_id).value);
    if (isNaN(a)) {
      console.log("Error")
    } else {
      const key = `${e.target.value}`;
      if (key in list) {
        const updateList = Object.assign({}, list);
        updateList[key] = updateList[key] + a;
        setList(updateList);
      } else {
        setList({ ...list, [key]: a });
      }
    }
  };

  const clear = (e) => {
    e.preventDefault();
    // clearMyLists();
  };

  function getAvePrice(stockInfo) {
    var sum = 0;
    for (var i = 0; i < stockInfo.length; i++) {
      sum += stockInfo[i].price;
    }
    var avg = sum / stockInfo.length;
    return avg;
  }

  return (
    <div className="shoppinglist">
      <div>{JSON.stringify(list)}</div>
      <ul className="products">
        {items.map((item) => (
          <li key={item.id}>
            <div className="product">
              <img src={item.img_src} alt={item.name}></img>
              <h2>{item.name.toUpperCase()}</h2>
              <span>
                Approx. <h1>${getAvePrice(item.stockInfo)}</h1>/{item.metric}
              </span>
              <form>
                <label htmlFor="quantity">Quantity:</label>
                <input
                  type="number"
                  id={item.id}
                  name="quantity"
                  min="1"
                  max="99"
                />
                <button
                  type="submit"
                  value={item.name}
                  onClick={(e) => addItem(e, item.id)}
                >
                  Add to Cart
                </button>
              </form>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
