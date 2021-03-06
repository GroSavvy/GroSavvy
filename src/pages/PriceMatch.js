import React from "react";
import SearchBar from "../components/SearchBar";
import Sort from "../components/Sort";
import { useState, useMemo } from "react";
import { useData } from "../data/dataProvider";

export default function PriceMatch() {
  const { stores } = useData();
  const [item, setItem] = useState(null);
  const [sort, setSort] = useState();

  const onSearch = (item) => {
    if (item) return setItem(item);
    setItem(null);
  };

  const stocks = useMemo(() => {
    if (item) {
      return item.stockInfo
        .map((info) => {
          const storeId = info["store_id"];
          const price = info["price"];
          const store = stores.filter(
            (store) => store.id.toString() === storeId.toString()
          )[0];
          return { ...store, price };
        })
        .sort((stock1, stock2) => {
          return stock1[sort] - stock2[sort];
        });
    }
  }, [item, stores, sort]);

  if (!item)
    return (
      <div>
        <SearchBar onSearch={onSearch} />
      </div>
    );
  return (
    <div>
      <SearchBar onSearch={onSearch} />
      <Sort onSelected={setSort} />
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>Price</th>
            <th>Store</th>
            <th>DistanceToMac</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock, i) => {
            return (
              <tr key={i}>
                <th>${stock["price"]}</th>
                <th>{stock["brand"]}</th>
                <th>{stock["distanceToMac"]}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
