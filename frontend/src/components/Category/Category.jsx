import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import style from "./category.module.scss";

// components
import { FeatureCard } from "../FeatureCard/index";

export function Category(props) {
  useEffect(() => {
    // const waifuApi = new api('your_secret_api_key_here')

    // waifuApi.getDailyWaifu().then((waifu) => {
    //   console.log(waifu.name);
    // });
    // let myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");
    // let requestOptions = {
    //   method: "GET",
    //   headers: myHeaders,
    //   redirect: "follow",
    //   credentials: "include",
    // };

    // fetch(
    //   "http://mywaifulist.moe/api/v1/user",
    //   requestOptions
    // ).then((response)=>{
    //   console.log(response);
    // })
  });

  // to feed data to the cards
  let arr = props.data.feed;
  let cards = [];
  for (var i = 0; i < arr.length; i++) {
    cards.push(<FeatureCard data={arr[i]} key={i}/>);
  }

  // to set the rails width dynamically
  let numberOfCards = arr.length;
  let railsWidth = 220 * numberOfCards + (numberOfCards - 1) * 30;
  return (
    <>
      <div className={style.container}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={style["heading-wrapper"]}>
                <h4 className={style.title}>{props.data.name}</h4>
                <Link to="/">Explore more &rarr;</Link>
              </div>
            </div>

            <div className="col-12">
              <div className={style["cards-section"]}>
                <div
                  className={style["cards-rail"]}
                  style={{ width: railsWidth }}
                >
                  {cards}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
