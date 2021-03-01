import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserContext } from "../utli/UserContext";

// components and pages
import { Header } from "../components/Header/index";
import { Homepage } from "../pages/Homepage/index";
import { Marketplace } from "../pages/Marketplace/index";
import { Login } from "../pages/Login/index";
import { Details } from "../pages/Details/index";
import { Footer } from "../components/Footer/index";

export function Dapp() {
  const [user, setUser] = useState(undefined);
  return (
    <>
      <Router>
        <UserContext.Provider value={{user, setUser}}>
          <Header />
          <Switch>
            <Homepage path="/" exact />
            <Login path="/login" exact />
            <Route path="/waifu/:id" component={Details} />
            <Route path="/market" exact component={Marketplace} />
          </Switch>
        </UserContext.Provider>

        <Footer />
      </Router>
    </>
  );
}
