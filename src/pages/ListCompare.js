import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useStoreOfList from "../components/useStoreOfList";


export default function ListCompare() {
  let { id } = useParams();
  const stores = useStoreOfList(id);
  const [details, setDetails] = useState([]);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;


  const output = details;
  console.log(output)
  return (
    <div className="content">
      <div className="main">
        {stores.map((store) => (
          // return <p>{JSON.stringify(store)}</p>;
          <div class="card">
            <div class="card-header">
              <span className="brand-name">{store.brand.toUpperCase()}</span>
              <span className="total-price">${store.grandTotal}</span>
            </div>
            <div className="media">
              <img class="d-flex align-self-start mr-3" src={store.img_src} alt="Store Logo" />
              <div class="media-body">
                <div class="card-body">
                  <span className="store-info">
                    <h4>Distance To McMster: {store.distanceToMac}km</h4>
                    <p>Location: {store.location}</p>
                  </span>
                  <span className="view-details">
                    <button type="button" class="btn btn-info" onClick={e => setDetails(store.itemsInStore)}>View Details</button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="sidebar">
        {details.map((item) => (
          <div>
            <ul class="list-group">
              <li class="list-group-item d-flex justify-content-between align-items-center">
                {item.name}
                <span class="badge badge-light badge-pill">x{item.count}</span>
                <span class="badge badge-primary">${item.storePrice}</span>
              </li>
            </ul>
            <div className="alert alert-info">
              ${item.itemTotalPrice}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
