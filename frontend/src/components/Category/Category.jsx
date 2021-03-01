import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import style from "./category.module.scss";

// components
import { FeatureCard } from "../FeatureCard/index";

// Raild display - with horizontal scroll
export function Category(props) {
  // useEffect(() => {
  //   console.log('category', props.imgSrc)
  // });

  // to feed data to the cards
  let arr = props.data.feed;
  let cards = [];
  for (var i = 0; i < arr.length; i++) {
    cards.push(<FeatureCard data={arr[i]} img={props.imgSrc[i]} key={i} auction={props.auction}/>);
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

// Grid display
export function GridCategory(props) {
   // to feed data to the cards
  let arr = props.data.feed;
  let cards = [];
  for (var i = 0; i < arr.length; i++) {
    cards.push(<div className="col-lg-3 col-md-6 col-sm-12"><FeatureCard data={arr[i]} img={props.imgSrc[i]} key={i} auction={props.auction}/></div>);
  }
  
  return (
    <>
      <div className={style.container}>
        <div className="container">
          <div className="row">
            {cards}
          </div>
        </div>
      </div>
    </>
  );
}
