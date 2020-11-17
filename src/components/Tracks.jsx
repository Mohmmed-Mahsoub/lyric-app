import React, { Component } from "react";
import Track from "./Track";
class Tracks extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h3 className="text-center mb-4">top 10 tracks</h3>
        <div className="row">
          <Track />
        </div>
      </React.Fragment>
    );
  }
}

export default Tracks;
