import React from "react";
import SearchBar from "../components/SearchBar";
import Sort from "../components/Sort";
import { useState, useMemo } from "react";
import { useData } from "../data/dataProvider";

export default function PriceMatch() {
  const { stores } = useData();
  const [item, setitem] = useState(null);
  const onSearch = (item) => {
    if (item) return setitem(item);
    setitem(null);
  };

  const stocks = useMemo(
    () =>
      item &&
      item.stockInfo.map((info) => {
        const storeId = info["store_id"];
        const price = info["price"];
        const store = stores.filter(
          (store) => store.id.toString() === storeId.toString()
        )[0];
        return { ...store, price };
      }),
    [item, stores]
  );

  if (!item)
    return (
      <div>
        <SearchBar onSearch={onSearch} />
      </div>
    );
  return (
    <div>
      <SearchBar onSearch={onSearch} />
      <table>
        <thead>
          <tr>
            <th>
              <Sort />
            </th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <th>Price</th>
            <th>Store</th>
            <th>DistanceToMac</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock, i) => {
            return (
              <tr key={i}>
                <th>${stock["price"]}</th>
                <th>{stock["brand"]}</th>
                <th>{stock["distanceToMac"]}</th>
                <th>
                  <button>View</button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
