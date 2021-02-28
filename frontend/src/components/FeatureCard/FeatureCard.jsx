import React from "react";
import {Link} from "react-router-dom";
import style from "./feature-card.module.scss";

// temporary image
import pika from "../../images/pika.png";

export function FeatureCard(props) {
  // let totalDays = props.data.expiry;
  // let remainingDays = totalDays % 365;
  // let days = remainingDays % 30;
  // let yr, month;

  // if (totalDays >= 2 * 365) {
  //   yr = Math.trunc(totalDays / 365);
  // } else {
  //   yr = 1;
  // }

  // if (remainingDays >= 2 * 30) {
  //   month = Math.trunc(remainingDays / 30);
  // } else {
  //   month = 1;
  // }

  //   console.log(`${yr} years ${month} months ${days} days`);

  return (
    <>
      {/* <Link to={`waifu/${props.data.id}`} className={style['link-wrapper']} data={props.data}> */}
      <Link to={{pathname: `waifu/${props.data.id}`, aboutProps:{name: 'salil',}}} className={style['link-wrapper']} >
        <div className={style.container}>
          <div className={style.image}>
            <img src={pika} alt="" />
          </div>
          <div className={style["nft__content"]}>
            <h5 className={style["nft__name"]}>{props.data.name}</h5>
            <p className={style["nft__id"]}>#{props.data.id}</p>
            {/* <p className={style["nft__expiry"]}>Expires in 15 days</p> */}
          </div>
        </div>
      </Link>
    </>
  );
}
