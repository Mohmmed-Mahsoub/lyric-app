import React, { Component } from "react";
import Track from "./Track";
import Spinner from "./Spinner";
import { Context } from "../context";
class Tracks extends Component {
  state = {};
  render() {
    return (
      <Context.Consumer>
        {(context) => {
          if (context.track_list.length === 0) {
            return <Spinner />;
          } else {
            return (
              <React.Fragment>
                <h3 className="text-center mb-4">top 10 tracks</h3>
                <div className="row">
                  {context.track_list.map((data) => {
                    console.log(data.track);
                    return (
                      <Track key={data.track.track_id} trackData={data.track} />
                    );
                  })}
                </div>
              </React.Fragment>
            );
          }
        }}
      </Context.Consumer>
    );
  }
}

export default Tracks;
