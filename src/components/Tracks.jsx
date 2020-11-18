import React, { Component } from "react";
import Track from "./Track";
import { Context } from "../context";
class Tracks extends Component {
  state = {};
  render() {
    return (
      <Context.Consumer>
        {(context) => {
          console.log(context);
          return (
            <React.Fragment>
              <h3 className="text-center mb-4">top 10 tracks</h3>
              <div className="row">
                <Track />
              </div>
            </React.Fragment>
          );
        }}
      </Context.Consumer>
    );
  }
}

export default Tracks;
