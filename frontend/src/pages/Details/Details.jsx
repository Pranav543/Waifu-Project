import React from "react";
import style from "./details.module.scss";

import pokemon from "../../images/waifu-filled-bg.jpg";
import { PropCard } from "./PropCard/index";

export function Details(props) {
  let tempData = {
    name: "Hotaru Ichijō",
    desc:
      " Hotaru is a fifth grade elementary school student who transfers into the Asahigaoka Branch School from Tokyo. Tall and quite developed for her age, she doesn't look like an elementary school student and is thus often treated like an adult. She admits to be not good at exercise but is shown to be stronger than Natsumi. She usually maintains a calm and composed appearance but also has a childish side and freaks out easily. Waifu submitted by Invader",
    origin: "Tokyo",
    age: "21",
    height: "160.3 cm",
    weight: "45.4 kg",
    bust: "78.4 cm",
    waist: "60.6 cm",
    hip: "85.6 cm",
  };
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
                <h2 className={style.heading}>{tempData.name}</h2>
                <p className={style.id}>#827297</p>

                <div className={style["btn-container"]}>
                  <div className={`${style.btn} ${style["btn__filled"]}`}>
                    Buy
                  </div>
                </div>

                <h3 className={style["sub-heading"]}>Bio</h3>
                <p>{tempData.desc}</p>

                <h3
                  className={style["sub-heading"]}
                  style={{ margin: "50px 0 30px 0" }}
                >
                  Special Features
                </h3>
                <div className="row">
                  <div className="col-3">
                    <PropCard type={"origin"} value={tempData.origin} />
                  </div>
                  <div className="col-3">
                    <PropCard type={"age"} value={tempData.age} />
                  </div>
                  <div className="col-3">
                    <PropCard type={"height"} value={tempData.height} />
                  </div>
                  <div className="col-3">
                    <PropCard type={"weight"} value={tempData.weight} />
                  </div>
                  <div className="col-3">
                    <PropCard type={"bust"} value={tempData.bust} />
                  </div>
                  <div className="col-3">
                    <PropCard type={"waist"} value={tempData.waist} />
                  </div>
                  <div className="col-3">
                    <PropCard type={"hip"} value={tempData.hip} />
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
