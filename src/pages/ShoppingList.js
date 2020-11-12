import React from "react";
import { useData } from "../data/dataProvider"

export default function ShoppingList() {
  const { items } = useData()

  return (
    <div>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <div>
              <img className="product-image"
                src={item.img_src}>
              </img>
              <h1>{item.name.toUpperCase()}</h1>
              <h1>${item.price}/{item.metric}</h1>
              <form>
                <label for="quantity">Quantity:</label>
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
