import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark mb-5">
        <span className="navbar-brand mb-0 h1 mx-auto">LyricFinder</span>
      </nav>
      <div className="container">
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
        <h3 className="text-center mb-4">top 10 tracks</h3>
        <div className="row">
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
        </div>
      </div>
    </div>
  );
}

export default App;
