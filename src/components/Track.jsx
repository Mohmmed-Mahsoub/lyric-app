import React, { Component } from "react";
import { Link } from "react-router-dom";
class Track extends Component {
  state = {};
  render() {
    const { trackData } = this.props;
    //console.log(trackData);
    return (
      <div className="col-md-6">
        <div className="card mb-4 shadow-sm">
          <div className="card-body">
            <h5>{trackData.artist_name}</h5>
            <p className="card-text">
              <strong>
                <i className="fas fa-play" /> Track:{" "}
              </strong>
              {trackData.track_name}
              <br />
              <strong>
                <i className="fas fa-compact-disc" /> Album:{" "}
              </strong>
              {trackData.album_name}
            </p>
            <Link
              to={`/track/lyric/${trackData.track_id}`}
              className="btn btn-dark btn-block"
            >
              <i className="fas fa-chevron-right" /> View Lyrics
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Track;
