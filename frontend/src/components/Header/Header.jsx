import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import getWeb3 from "./../../web3";
import { UserContext } from "../../utli/UserContext";

// style
import style from "./header.module.scss";

// components
import Avatar from "./Avatar/Avatar";

export function Header() {
  const { user, setUser } = useContext(UserContext);
  const connectToMetamask = async () => {
    const web3 = await getWeb3();
    console.log(web3);
    const accounts = await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId();
    setUser(accounts);
  };
  return (
    <header className={style.container}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={style["inner-container"]}>
              <div style={{ color: "white", lineHeight: "60px" }}>
                {/* <img src="" alt="Dapp logo"/> */}
                The Waifu NFT Marketplace
              </div>

              <nav className={style.nav}>
                <ul>
                  <li className={style.item}>
                    <NavLink activeClassName={style.active} exact to="/">
                      Home
                    </NavLink>
                  </li>
                  <li className={style.item}>
                    <NavLink activeClassName={style.active} exact to="/market">
                      Marketplace
                    </NavLink>
                  </li>
                  {user ? (
                    <Avatar address={user} />
                  ) : (
                    <li
                      className={`${style.btn} ${style["btn__filled--header"]}`}
                      onClick={connectToMetamask}
                      style={{marginRight:0}}
                    >
                      Connect Wallet
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
