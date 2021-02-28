import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import style from "./header.module.scss";
import getWeb3 from "./../../web3";
import Avatar from "./Avatar/Avatar";

export function Header(props) {

  const connectToMetamask = async () =>{
    console.log("In")
    const web3 = await getWeb3();
    console.log(web3)
      const accounts = await web3.eth.getAccounts();
      const networkId = await web3.eth.net.getId();
      console.log(accounts);
      console.log(networkId);
  }
  return (
    <header className={style.container}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={style["inner-container"]}>
              <div style={{ color: "white", lineHeight: "60px" }}>
                {/* <img src="" alt="Dapp logo"/> */}
                LOGO
              </div>

              <nav className={style.nav}>
                <ul>
                  <li>
                    <NavLink activeClassName={style.active} exact to="/">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName={style.active} exact to="/market">
                      Marketplace
                    </NavLink>
                  </li>
                  {props.loginStatus ? (
                    <Avatar address={props.userAddress} />
                  ) : (
                    <li>
                      <button className="btn btn-warning" type="button" onClick={connectToMetamask}>
                        Connect Wallet
                      </button>
                    </li>
                  )}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
