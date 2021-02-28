import React, { useState } from "react";
import getWeb3 from "./../../web3";
import CreateWaifu from "./../../abi/CreateWaifu.json";
import style from "./modal.module.scss";

export function Modal() {
  const [name, setName] = useState("");
  const [origin, setOrigin] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // code below
    const web3 = await getWeb3();
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    const networkId = await web3.eth.net.getId();
    const randomNumber = Math.floor(Math.random() * 100000);
    // const imgSource = `https://www.thiswaifudoesnotexist.net/example-${randomNumber}.jpg`;
    const address = `0x7Fc753337F15F47cf7BCE74545c2753E3dA12bda`;
    console.log(address);
    const instance = new web3.eth.Contract(CreateWaifu.abi, address);
    // const tx = await instance.methods
    //   .requestNewRandomWaifu(7887, name, origin, description, "imgSource")
    //   .send({
    //     gas:300000,
    //     from: accounts[0].toLowerCase(),
        
    //   });
    // console.log("Tx Hash Is : ", tx);
    const num = await instance.methods.getWaifusCount(accounts[0]).call();
    console.log("Number Of Waifu: ", num);
    // const second_waifu = await instance.methods.waifus(0).call();
    // console.log("Second Waifu: ", second_waifu);
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      className={style.container}
    >
      <input
        name="name"
        value={name}
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        className={style.input}
      />
      <input
        name="origin"
        value={origin}
        type="text"
        placeholder="Origin"
        onChange={(e) => setOrigin(e.target.value)}
        className={style.input}
      />
      <textarea
        name="description"
        value={description}
        type="text"
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
        className={style.desc}
      />
      <button
        type="submit"
        className={`${style.btn} ${style["btn__filled"]} ${style["btn-override"]}`}
        style={{ margin: 0 }}
      >
        Mint now!
      </button>
    </form>
  );
}
