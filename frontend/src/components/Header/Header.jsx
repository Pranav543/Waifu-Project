import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import style from "./header.module.scss";

import Avatar from "./Avatar/Avatar";

export function Header(props) {
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
                      <NavLink activeClassName={style.active} exact to="/login">
                        Login
                      </NavLink>
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
