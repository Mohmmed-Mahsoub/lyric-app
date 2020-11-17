import React, { Component } from "react";
class Track extends Component {
  state = {};
  render() {
    return (
      <div className="col-md-6">
        <div className="card mb-4 shadow-sm">
          <div className="card-body">
            <h5>track artist name</h5>
            <p className="card-text">
              <strong>
                <i className="fas fa-play" /> Track
              </strong>
              track artist name
              <br />
              <strong>
                <i className="fas fa-compact-disc" /> Album
              </strong>
              track artist name
            </p>
            <button className="btn btn-dark btn-block">
              <i className="fas fa-chevron-right" /> View Lyrics
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Track;
