import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

// components and pages
import { Header } from "../components/Header/index";
import { Homepage } from "../pages/Homepage/index";
import { Login } from "../pages/Login/index";
import { Details } from "../pages/Details/index";
import { Footer } from "../components/Footer/index";

export class Dapp extends React.Component {
  constructor(props){
    super(props);

    this.state={
      loginStatus: false,
      userAddress: undefined,
    }
  }

  loginStatus=(data) => {
    this.setState({
      loginStatus: data.loginStatus,
      userAddress: data.userAddress,
    })
  }
  render() {
    return (
      <>
        <Router>
          <Header loginStatus={this.state.loginStatus} userAddress={this.state.userAddress}/>
          <Switch>
            <Homepage path="/" exact loginStatus={this.state.loginStatus} />
            <Login path="/login" exact getLoginStatus={this.loginStatus}/>
            <Details path="/waifu/:id" />
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}