import Axios from "axios";
import React, { Component, createContext } from "react";
import axiox from "axios";
export const Context = createContext();

class ContextProvider extends Component {
  state = {
    track_list: [],
  };
  componentDidMount = async () => {
    const res = await axiox.get(
      `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_API_KEY}`
    );
    this.setState({ track_list: res.data.message.body.track_list });
    //console.log(res.data.message.body.track_list);
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default ContextProvider;
