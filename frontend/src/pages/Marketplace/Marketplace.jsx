import React from "react";
import style from "./marketplace.module.scss";

// components
import { GridCategory } from "../../components/Category";

export function Marketplace() {
  let categoryOneData = {
    name: "Popular Waifus",
    feed: [
      {
        name: "Name one",
        id: 839383,
        expiry: 12,
        origin: "india",
        age: 25,
        height: "5.3 ft",
        weight: "30 kgs",
        bust: "45",
        waiste: "76",
        hip: "64",
        desc: "desc",
      },
      { name: "Name two", id: 145367, expiry: 870 },
      { name: "Name three", id: 938708, expiry: 1678 },
      { name: "Name four", id: 839378, expiry: 12 },
      { name: "Name one", id: 909899, expiry: 12 },
      { name: "Name two", id: 112345, expiry: 870 },
      { name: "Name three", id: 111111, expiry: 1678 },
      { name: "Name four", id: 376777, expiry: 12 },
    ],
  };
  return (
    <>
      <div className={style.container}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className={style.heading}>Marketplace</h1>
            </div>
          </div>
        </div>
        <GridCategory data={categoryOneData} />
      </div>
    </>
  );
}
