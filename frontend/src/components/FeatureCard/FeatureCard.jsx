import React from "react";
import {Link} from "react-router-dom";
import style from "./feature-card.module.scss";

export function FeatureCard(props) {
  return (
    <>
      <Link to={{pathname: `waifu/${props.data.id}`, aboutProps:{name: 'salil',}}} className={style['link-wrapper']} >
        <div className={style.container}>
          <div className={style.image}>
            <img src={props.img} alt="waifu image" />
          </div>
          <div className={style["nft__content"]}>
            <h5 className={style["nft__name"]}>{props.data.name}</h5>
            <p className={style["nft__id"]}>#{props.data.id}</p>
            <div className={`${style.btn} ${style['btn__filled']}`} style={{display:'block', textTransform: "capitalize"}}>{props.auction?'Auction':`Price ${props.data.price} USD`}</div>
          </div>
        </div>
      </Link>
    </>
  );
}
