import React from "react";
import SearchBar from "../components/SearchBar";
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
        const storeId = Object.keys(info)[0];
        const price = Object.values(info)[0];
        const store = stores.filter(
          (store) => store.id.toString() === storeId
        )[0];
        return { ...store, price };
      }),
    [item,stores]
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
