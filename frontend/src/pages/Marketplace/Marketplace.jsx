import React from "react";
import style from "./marketplace.module.scss";
import getWeb3 from "./../../web3";
import CreateWaifu from "./../../abi/CreateWaifu.json";

// components
import { GridCategory } from "../../components/Category";
import { useEffect, useState } from "react";

export function Marketplace() {
//   useEffect(() => {
//     async function showData() {
//       const address = "0x873597E0CC137a72Fe928C376d1F7CF00C2e6D3D";
//       const web3 = await getWeb3();
//       const accounts = await web3.eth.getAccounts();
//       const instance = new web3.eth.Contract(CreateWaifu.abi, address);
//       const numOfWaifus = await instance.methods
//         .getNumberOfWaifus()
//         .call();
//       console.log("number market", numOfWaifus);
//       const ids = await instance.methods
//           .senderToTokenId(accounts[0], 1)
//           .call();
          
//         console.log(ids);

//     //   for (let i = numOfWaifus - 1; i >= 0; i--) {
//     //     console.log("loop");
//     //     //Get id
        
//     //     console.log(accounts[0]);

//     //     // console.log(ids);
//     //     //Get option
//     //     // const option = await this.state.putContract.methods.idToOption(id).call();
//     //   }
//       // const data = await instance.methods.getWaifuStats();
//       // console.log(data);
//     }

//     showData();
//   });
  
const [imgSrcArrOne, setImgSrcArrOne] = useState([]);

useEffect(()=>{
    // image source arr for marketplace
    let lengthOne = categoryOneData.feed.length;
    let imgSrcArrOne = [];
    for(let i=0; i<lengthOne; i++){
      const randomNumber = Math.floor(Math.random() * 100000);
      let src = `https://www.thiswaifudoesnotexist.net/example-${randomNumber}.jpg`;
      imgSrcArrOne.push(src);

      if(i==(lengthOne-1)){
        setImgSrcArrOne(imgSrcArrOne);
      }
    }
},[])
let categoryOneData = {
    name: "Popular Waifus",
    feed: [
      {name: "Roxy Migurdia", id: 176878, price: 837 },
      {name: "Kyouko Hori", id: 839383, price: 731 },
      {name: "Miku Nakano", id: 111733, price: 8190 },
      {name: "Ai Ohto", id: 908353, price: 83 },
      {name: "Shuna", id: 188889, price: 9098 },
      {name: "Kohaku", id: 777676, price: 83938 },
      {name: "Echidna", id: 88898, price: 10 },
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
        <GridCategory data={categoryOneData} imgSrc={imgSrcArrOne} auction={false}/>
      </div>
    </>
  );
}
