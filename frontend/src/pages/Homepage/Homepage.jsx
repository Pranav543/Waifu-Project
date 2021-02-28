import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./homepage.module.scss";
import waifuImage from "../../images/waifu.png";
// import {waifuR} from "waifur";
// import {test} from "../../scripts/waifu";

// components
import { Category } from "../../components/Category/index";
import { Modal } from "../../components/Modal/index";

export function Homepage(props) {
  const [loginStatus, setLoginStatus] = useState(true);
  // const [modalToggle, setModalToggle] = useState(false);
  const [modalDisplay, setModalDisplay] = useState("none");

  useEffect(() => {
    setLoginStatus(props.loginStatus);
  });

  let showModal = () => {
    setModalDisplay("block");
  };

  let hideModal = () => {
    setModalDisplay("none");
  };

  let categoryOneData = {
    name: "Popular Waifus",
    feed: [
      { name: "Name one", id: 839383, expiry: 12, origin: "india", age: 25, height: '5.3 ft', weight: '30 kgs', bust: '45', waiste: '76', hip: '64', desc: 'desc'},
      { name: "Name two", id: 145367, expiry: 870 },
      { name: "Name three", id: 938708, expiry: 1678 },
      { name: "Name four", id: 839378, expiry: 12 },
      { name: "Name one", id: 909899, expiry: 12 },
      { name: "Name two", id: 112345, expiry: 870 },
      { name: "Name three", id: 111111, expiry: 1678 },
      { name: "Name four", id: 376777, expiry: 12 },
    ],
  };
  let categoryTwoData = {
    name: "My Waifus",
    feed: [
      { name: "Name one", id: 111123, expiry: 12 },
      { name: "Name two", id: 241314, expiry: 870 },
      { name: "Name three", id: 198098, expiry: 1678 },
      { name: "Name four", id: 181111, expiry: 12 },
    ],
  };
  return (
    <>
      <div
        className={style["modal-container"]}
        style={{ display: modalDisplay }}
      >
        <Modal />
        <div className={style["close-modal"]} onClick={hideModal}>&times;</div>
      </div>
      <div className={style.container}>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <div className={style["content-section"]}>
                <h1 className={style.title}>Title of the Webpage</h1>
                <p className={style.desc}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, voluptatibus maiores? Ratione commodi magni facilis,
                  temporibus ex esse laborum error! Lorem, ipsum dolor sit amet
                  consectetur adipisicing elit. Temporibus, nihil.
                </p>
                <div className={style["btn-container"]}>
                  {true ? (
                    <div
                      className={`${style.btn} ${style["btn__outlined"]}`}
                      onClick={showModal}
                    >
                      Mint
                    </div>
                  ) : (
                    <Link
                      to="/login"
                      className={`${style.btn} ${style["btn__outlined"]}`}
                    >
                      Login
                    </Link>
                  )}

                  <a
                    href="test"
                    className={`${style.btn} ${style["btn__outlined"]}`}
                  >
                    Explore
                  </a>
                </div>
              </div>
            </div>
            <div className="col-4">
              <img src={waifuImage} alt="waifu image" className={style.img} />
            </div>
          </div>
        </div>
      </div>
      <div className={style["category-section"]}>
        <Category data={categoryOneData} />
        <Category data={categoryTwoData} />
      </div>
    </>
  );
}
