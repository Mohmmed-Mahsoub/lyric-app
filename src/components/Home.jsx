import React, { Component } from "react";
import Search from "./Search";
import Tracks from "./Tracks";
class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Search />
        <Tracks />
      </React.Fragment>
    );
  }
}

export default Home;
