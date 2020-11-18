import React, { Component } from "react";
import axiox from "axios";

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
    console.log(this.state);
    return <div>lyric id {this.props.match.params.id}</div>;
  }
}

export default Lyric;
