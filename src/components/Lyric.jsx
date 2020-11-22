import React, { Component } from "react";
import axiox from "axios";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import Moment from "react-moment";

class Lyric extends Component {
  state = {
    lyricData: {},
    trackData: {},
  };
  componentDidMount = async () => {
    const resLyrics = await axiox.get(
      `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_API_KEY}`
    );
    this.setState({ lyricData: resLyrics.data.message.body.lyrics });
    const resTrack = await axiox.get(
      `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_API_KEY}`
    );
    this.setState({ trackData: resTrack.data.message.body.track });
  };
  render() {
    const { lyricData, trackData } = this.state;

    //console.log(this.state);
    if (
      Object.keys(lyricData).length === 0 ||
      Object.keys(trackData).length === 0
    ) {
      return <Spinner />;
    } else {
      return (
        <React.Fragment>
          <Link to="/" className="btn btn-dark btn-sm mb-4">
            Go Back
          </Link>
          <div className="card">
            <h5 className="card-header">
              {trackData.track_name} by{" "}
              <span className="text-secondary">{trackData.artist_name}</span>
            </h5>
            <div className="card-body">
              <p className="card-text">{lyricData.lyrics_body}</p>
            </div>
          </div>
          <ul className="list-group mt-3">
            <li className="list-group-item">
              <strong>Album ID</strong>: {trackData.album_id}
            </li>
            <li className="list-group-item">
              <strong>Song Genre</strong>:{" "}
              {
                trackData.primary_genres.music_genre_list[0].music_genre
                  .music_genre_name
              }
            </li>
            <li className="list-group-item">
              <strong>Explicit Words</strong>:{" "}
              {trackData.explicit === 0 ? "No" : "Yes"}
            </li>
            <li className="list-group-item">
              <strong>Release Date</strong>:{" "}
              <Moment format="DD/MM/YYYY">
                {trackData.first_release_date}
              </Moment>
            </li>
          </ul>
        </React.Fragment>
      );
    }
  }
}

export default Lyric;
