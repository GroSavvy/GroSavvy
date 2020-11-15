import { useData } from "../data/dataProvider";

// [
//   {
//     "coca cola large": 2,
//     "baking potato": 5,
//     strawberry: 2,
//     "lays potato chips small": 2,
//   },
// ];

export default function useStoreOfList(listId) {
  const { myLists, stores, items } = useData();

  const comparedItems = myLists.filter((list) => {
    return list["id"].toString() === listId.toString();
  })[0]["list"];

  const comparedItemKeys = Object.keys(comparedItems);

  const comparedItemsFull = items
    .filter((item) => {
      return comparedItemKeys.includes(item["name"]);
    })
    .map((item) => ({ ...item, count: comparedItems[item.name] }));

  const selectedStoresFullDetail = stores
    .filter((store) => {
      return comparedItemsFull.every((item) => {
        const storeIDs = item.stockInfo.map((info) => info["store_id"]);
        return storeIDs.includes(store["id"]);
      });
    })
    .map((storeInfo) => {
      const itemsInStore = comparedItemsFull.map((item) => {
        const { count, name, metric, img_src } = item;
        const storePrice = item["stockInfo"].filter(
          (info) => info["store_id"].toString() === storeInfo["id"].toString()
        )[0]["price"];
        console.log(storePrice);
      });
    });

  return [];
}
