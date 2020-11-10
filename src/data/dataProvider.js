import React, { createContext, useState, useContext } from "react";
import itemsRawData from "./items.json";
import storesRawData from "./stores.json";

const DataContext = createContext();
export const useData = () => useContext(DataContext);

export function DataProvider({ children }) {
  const [items, setItems] = useState(itemsRawData);
  const [stores, setStores] = useState(storesRawData);
  const [currentLists, setLists] = useState([]);

  const getItemsByKeyWord = (word) =>
    items.items.filter((item) => item.keyWords.includes(word));

  const getStoresByName = (name) =>
    stores.filter((store) => store.brand.includes(name));


  const createNewList = (list = []) => setLists([...currentLists, list]);

  return (
    <DataContext.Provider
      value={{
        items,
        getItemsByKeyWord,
        stores,
        getStoresByName,
        currentLists,
        createNewList
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
