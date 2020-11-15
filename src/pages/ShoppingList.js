import React, { useState } from "react";
import { useData } from "../data/dataProvider";
import { useNavigate } from "react-router-dom";

export default function ShoppingList() {
  const { items, addNewList } = useData();
  const [list, setList] = useState({});
  let navigate = useNavigate();


  const addItem = (e, item_id) => {
    e.preventDefault();
    var num = parseInt(document.getElementById(item_id).value);
    if (isNaN(num)) {
      console.log("Error")
    } else {
      const key = `${e.target.value}`;
      if (key in list) {
        const updateList = Object.assign({}, list);
        updateList[key] = updateList[key] + num;
        setList(updateList);
      } else {
        setList({ ...list, [key]: num });
      }
    }
  };

  // submit shopping cart to my lists
  const submit = (e, list) => {
    e.preventDefault();
    addNewList(list);
  };

  // clear shopping cart
  const clear = (e) => {
    e.preventDefault();
    setList({});
  };

  function getAvePrice(stockInfo) {
    var sum = 0;
    for (var i = 0; i < stockInfo.length; i++) {
      sum += stockInfo[i].price;
    }
    var avg = sum / stockInfo.length;
    return avg;
  }

  const handleChange = (e) => {
    submit(e, list)
    navigate(`/mylists`);
  };



  return (
    <div className="content">
      <div className="main">
        <ul className="products">
          {items.map((item) => (
            <li key={item.id}>
              <div className="product">
                <img className="img-thumbnail" src={item.img_src} alt={item.name}></img>
                <h2>{item.name.toUpperCase()}</h2>
                <span>
                  Approx. <h1>${getAvePrice(item.stockInfo).toFixed(2)}</h1>/{item.metric}
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
                    className="btn btn-primary"
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
      <div className="sidebar">
        <h2>Shopping Cart</h2>
        <div>
          {Object.keys(list).length == 0 ?
          
            <div className="empty-cart" className="alert alert-info" role="alert">
              Cart is empty.
            </div>
            :
            <div>
              <div className="nonempty-cart" className="alert alert-info" role="alert">
                You have {Object.keys(list).length} kind of groceries in the cart.
              </div>
              <div className="cart">
                <ul className="list-group">
                  {Object.keys(list).map(key => (
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      {key}
                      <span className="badge badge-primary badge-pill">
                        {list[key]}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleChange}
                >
                  Create List
                </button>
                <button
                  type="submit"
                  className="btn btn-secondary"
                  onClick={clear}
                >
                  Clear List
                </button>
              </div>
            </div>
          }
        </div>
      </div>

    </div>
  );
}
