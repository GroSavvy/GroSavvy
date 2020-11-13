import React, { createContext, useState, useContext } from "react";
import itemsRawData from "./items.json";
import storesRawData from "./stores.json";

const DataContext = createContext();
export const useData = () => useContext(DataContext);

const loadJSON = (key) => key && JSON.parse(localStorage.getItem(key));
const saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify(data));
const clearLocalStorage = (key) => key && localStorage.removeItem(key);

export function DataProvider({ children }) {
  const [myLists, setMyLists] = useState(loadJSON("myLists") || []);
  const [items] = useState(itemsRawData);
  const [stores] = useState(storesRawData);

  const getItemsByKeyWord = (word) =>
    items.filter((item) => item.keyWords.includes(word));

  const getStoresByName = (name) =>
    stores.filter((store) => store.brand.includes(name));

  const addNewList = (list) => {
    setMyLists([...myLists, list]);
    saveJSON("myLists", myLists);
  };
  const clearMyLists = () => {
    setMyLists([])
    clearLocalStorage("myLists")
  };

  return (
    <DataContext.Provider
      value={{
        items,
        getItemsByKeyWord,
        stores,
        getStoresByName,
        myLists,
        addNewList,
        clearMyLists
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
