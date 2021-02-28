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
    const address = `0xaa608FE67f3BAb163d843c67798Bd45B2949eAF0`;
    console.log(address);
    const randomNumber = Math.floor(Math.random() * 100000);
    const imgSource = `https://www.thiswaifudoesnotexist.net/example-${randomNumber}.jpg`;
    const instance = new web3.eth.Contract(CreateWaifu.abi, address);
    const tx = await instance.methods
      .requestNewRandomWaifu(7887, name, origin, description, imgSource)
      .send({
        from: accounts[0].toLowerCase(),
      });
    console.log("Tx Hash: ", tx);
    const num = await instance.methods.getNumberOfWaifus().call();
    console.log("Number Of Waifu: ", num);
    const second_waifu = await instance.methods.waifus(1).call();
    console.log("Second Waifu: ", second_waifu);
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
