import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../utli/UserContext";

import getWeb3 from  "./../../web3";
import CreateWaifu from "./../../abi/CreateWaifu.json";

import style from "./homepage.module.scss";
import waifuImage from "../../images/waifu.png";

// components
import { Category } from "../../components/Category/index";
import { Modal } from "../../components/Modal/index";

export function Homepage() {
  const [modalDisplay, setModalDisplay] = useState("none");
  const [imgSrcArrOne, setImgSrcArrOne] = useState([]);
  const [imgSrcArrTwo, setImgSrcArrTwo] = useState([]);

  useEffect(()=>{
    // async function showData() {
    //   const address = '0x873597E0CC137a72Fe928C376d1F7CF00C2e6D3D'
    //   const web3 = await getWeb3();
    //   const accounts = await web3.eth.getAccounts();
    //   console.log(accounts);
    //   const instance = new web3.eth.Contract(CreateWaifu.abi, address);
    //   const numOfWaifus = await instance.methods.getWaifusCount('0x148D6d1d5793eB9bDC14941AE8953894a36dbc22').call();
    //   console.log('number', numOfWaifus);
     

    //   for (let i = numOfWaifus - 1; i >= 0; i--) {
    //     console.log('loop')
    //     //Get id
    //     const ids = await instance.methods
    //       .senderToTokenId(accounts[0], i)
    //       .call();

    //     console.log(ids);
    //     //Get option
    //     // const option = await this.state.putContract.methods.idToOption(id).call();
    //   }
    //   // const data = await instance.methods.getWaifuStats();
    //   // console.log(data); 
    // }
    
    // showData();

    // image source arr for categoryOne - Popular Waifus
    let lengthOne = categoryOneData.feed.length;
    let imgSrcArrOne = [];
    for(let i=0; i<lengthOne; i++){
      const randomNumber = Math.floor(Math.random() * 100000);
      let src = `https://www.thiswaifudoesnotexist.net/example-${randomNumber}.jpg`;
      imgSrcArrOne.push(src);
    }

    setImgSrcArrOne(imgSrcArrOne);

    // image source arr for categoryTwo - My Waifus
    let lengthTwo = categoryTwoData.feed.length;
    let imgSrcArrTwo = [];
    for(let i=0; i<lengthTwo; i++){
      const randomNumber = Math.floor(Math.random() * 100000);
      let src = `https://www.thiswaifudoesnotexist.net/example-${randomNumber}.jpg`;
      imgSrcArrTwo.push(src);
    }

    setImgSrcArrTwo(imgSrcArrTwo);
  }, [])

  let showModal = () => {
    setModalDisplay("block");
  };

  let hideModal = () => {
    setModalDisplay("none");
  };

  const {user} = useContext(UserContext);

  let categoryOneData = {
    name: "Popular Waifus",
    feed: [
      {name: "Ai Ohto", id: 908353, price: 83 },
      {name: "Shuna", id: 188889, price: 9098 },
      {name: "Kohaku", id: 777676, price: 83938 },
      {name: "Roxy Migurdia", id: 176878, price: 837 },
      {name: "Kyouko Hori", id: 839383, price: 731 },
      {name: "Miku Nakano", id: 111733, price: 8190 },
      {name: "Echidna", id: 88898, price: 10 },
      { name: "Name four", id: 376777, price: 500 },
    ],
  };
  let categoryTwoData = {
    name: "My Waifus",
    feed: [
      { name: "Ruri", id: 111123, price:57 },
      { name: "Luna Healer", id: 241314, price: 870 },
      { name: "Shizue Izawa", id: 198098, price: 1678 },
      { name: "Treyni", id: 181111, price: 12 },
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
                <h1 className={style.title}>The Waifu Project</h1>
                <p className={style.desc}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, voluptatibus maiores? Ratione commodi magni facilis,
                  temporibus ex esse laborum error! Lorem, ipsum dolor sit amet
                  consectetur adipisicing elit. Temporibus, nihil.
                </p>
                <div className={style["btn-container"]}>
                  {user ? (
                    <div
                      className={`${style.btn} ${style["btn__outlined"]}`}
                      onClick={showModal}
                    >
                      Mint
                    </div>
                  ) : (
                    <></>
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
        <Category data={categoryOneData} imgSrc={imgSrcArrOne} auction={true}/>
        <Category data={categoryTwoData} imgSrc={imgSrcArrTwo} auction={true}/>
      </div>
    </>
  );
}
