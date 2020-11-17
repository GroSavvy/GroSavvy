import React, { useState } from "react";
import { useData } from "../data/dataProvider";
import { Link } from "react-router-dom";

export default function MyLists() {
  const { myLists } = useData();
  const [details, setDetails] = useState([]);
  const handleClick = (a) => {
    setDetails(a);
  };

  return (
    <div className="content">
      <div className="main">
        {myLists.map((list, i) => {
          return (
            <div key={i}>
              <div className="card-header">
                <span className="brand-name">
                  {list["time"].substring(0, list["time"].length - 7)}
                </span>
              </div>
              <div className="media">
                <div className="media-body">
                  <div className="card-body">
                    <span className="view-details">
                      <button
                        type="button"
                        className="btn btn-info"
                        onClick={() => handleClick(list["list"])}
                      >
                        View Details
                      </button>{" "}
                      <Link to={`/listcompare/${list["id"]}`}>
                        <button type="button" className="btn btn-info">
                          Compare List
                        </button>
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="sidebar">
        <div className="card-header">Shopping List Preview</div>
        {details.length !== 0 ? (
          <div>
            {Object.entries(details).map(([key, val]) => {
              return (
                <div key={key}>
                  <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center text-capitalize">
                      {key}
                      <span className="badge badge-light badge-pill">
                        x{val}
                      </span>
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-warning">Click View Details to see details.</div>
        )}
      </div>
    </div>
  );
}
