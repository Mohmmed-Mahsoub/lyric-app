import React, { Component } from "react";
class Search extends Component {
  state = {};
  render() {
    return (
      <div className="card card-body mb-4 p-4">
        <h1 className="display-4 text-center">
          <i className="fas fa-music" /> Search For A Song
        </h1>
        <p className="lead text-center">Get the lyrics for any song</p>
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Song title..."
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
  }
}

export default Search;