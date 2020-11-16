import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useStoreOfList from "../components/useStoreOfList";

export default function ListCompare() {
  let { id } = useParams();
  const stores = useStoreOfList(id);
  const [details, setDetails] = useState([]);
  const [total, setTotal] = useState(0);

  const handleClick = (a, b) => {
    setDetails(a);
    setTotal(b);
  };
  const output = details;
  console.log(output);
  return (
    <div className="content">
      <div className="main">
        {stores.map((store, i) => (
          // return <p>{JSON.stringify(store)}</p>;
          <div key={i} className="card">
            <div className="card-header">
              <span className="brand-name">{store.brand.toUpperCase()}</span>
              <span className="total-price">${store.grandTotal}</span>
            </div>
            <div className="media">
                <div className="media-body">
                <div className="card-body">
                  <span className="store-info">
                    <h4>Distance To McMster: {store.distanceToMac}km</h4>
                    <p>Location: {store.location}</p>
                  </span>
                  <span className="view-details">
                    <button
                      type="button"
                      className="btn btn-info"
                      onClick={() =>
                        handleClick(store.itemsInStore, store.grandTotal)
                      }
                    >
                      View Details
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="sidebar">
        <div className="card-header">Shopping List Preview</div>
        {Object.keys(details).length !== 0 ? (
          <div>
            {details.map((item, i) => (
              <div key={i}>
                <ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between align-items-center text-capitalize">
                    {item.name}
                    <span className="badge badge-light badge-pill">
                      x{item.count}
                    </span>
                    <span className="badge badge-primary">
                      ${item.storePrice}
                    </span>
                  </li>
                </ul>
                <div className="alert alert-info">${item.itemTotalPrice}</div>
              </div>
            ))}
            <div className="total-price-display">Total: ${total}</div>
          </div>
        ) : (
          <div className="text-warning">Click View Details to see details.</div>
        )}
      </div>
    </div>
  );
}
