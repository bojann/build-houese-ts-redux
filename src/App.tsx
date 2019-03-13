import React, { Component } from "react";
import "./App.scss";
import Layout from "./component/Layout/Layout";
import BurgerBuilder from "./container/BurgerBuilder/BurgerBuilder";

class App extends Component {
  public render() {
    return (
      <div className="App">
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
