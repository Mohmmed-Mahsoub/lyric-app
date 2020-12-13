import React, { Component } from "react";
import axiox from "axios";
import { Context } from "../context";
class Search extends Component {
  state = {
    trackTitle: "",
  };
  handleChange = (e) => {
    //clone
    let state = { ...this.state };
    //edit
    state[e.target.name] = e.target.value;
    //set state
    this.setState(state);
  };
  handleSubmit = async (context, e) => {
    try {
      const { dispatch } = context;
      e.preventDefault();
      const res = await axiox.get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_API_KEY}`
      );
      const newTrackList = res.data.message.body.track_list;
      dispatch({ type: "SERCH_TRACKS_RES", payload: newTrackList });
      this.setState({ trackTitle: " " });
    } catch (err) {
      window.alert(err);
    }
  };
  render() {
    return (
      <Context.Consumer>
        {(context) => {
          return (
            <div className="card card-body mb-4 p-4">
              <h1 className="display-4 text-center">
                <i className="fas fa-music" /> Search For A Song
              </h1>
              <p className="lead text-center">Get the lyrics for any song</p>
              <form onSubmit={(e) => this.handleSubmit(context, e)}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Song title..."
                    name="trackTitle"
                    value={this.state.trackTitle}
                    onChange={this.handleChange}
                  />
                </div>
                <button
                  className="btn btn-primary btn-lg btn-block mb-5"
                  type="submit"
                >
                  Get Track Lyrics
                </button>
              </form>
            </div>
          );
        }}
      </Context.Consumer>
    );
  }
}

export default Search;
