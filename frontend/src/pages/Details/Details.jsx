import React from "react";
import style from "./details.module.scss";

import pokemon from "../../images/waifu-filled-bg.jpg";
import { PropCard } from "./PropCard/index";

export function Details() {
  return (
    <>
      <div className={style.container}>
        <div className="container">
          <div className="row">
            <div className="col-5">
              <img src={pokemon} className={style.img} />
            </div>
            <div className="col-7">
              <div className={style.features}>
                <h2 className={style.heading}>Name of the waifu</h2>
                <p className={style.id}>#827297</p>

                <div className={style["btn-container"]}>
                  <div className={`${style.btn} ${style["btn__filled"]}`}>
                    Buy
                  </div>
                </div>

                <h3 className={style["sub-heading"]}>Bio</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis non necessitatibus soluta aperiam minima? Soluta
                  fugiat perspiciatis porro corrupti voluptatum asperiores
                  voluptas deserunt ad qui? Omnis magnam, autem ipsum fugiat
                  reprehenderit repellendus eos sint doloremque quod, magni
                  quisquam. 
                </p>

                <h3 className={style["sub-heading"]} style={{margin:'50px 0 30px 0'}}>Special Features</h3>
                <div className="row">
                  <div className="col-3">
                    <PropCard type={"origin"} value={"India"} />
                  </div>
                  <div className="col-3">
                    <PropCard type={"age"} value={"56"} />
                  </div>
                  <div className="col-3">
                    <PropCard type={"height"} value={"56"} />
                  </div>
                  <div className="col-3">
                    <PropCard type={"weight"} value={"56"} />
                  </div>
                  <div className="col-3">
                    <PropCard type={"bust"} value={"56"} />
                  </div>
                  <div className="col-3">
                    <PropCard type={"waist"} value={"56"} />
                  </div>
                  <div className="col-3">
                    <PropCard type={"hip"} value={"56"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
