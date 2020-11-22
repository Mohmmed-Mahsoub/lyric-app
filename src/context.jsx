import React, { Component, createContext } from "react";
import axiox from "axios";
export const Context = createContext();

class ContextProvider extends Component {
  state = {
    track_list: [],
    serch_heading: "top 10 tracks",
    dispatch: (action) => {
      //console.log(action);
      this.setState((state) => this.reducer(state, action));
    },
  };
  componentDidMount = async () => {
    const res = await axiox.get(
      `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_API_KEY}`
    );
    this.setState({ track_list: res.data.message.body.track_list });
    //console.log(res.data.message.body.track_list);
  };
  reducer(state, action) {
    if (action.type === "SERCH_TRACKS_RES") {
      return {
        track_list: action.payload,
        serch_heading: "serch results",
      };
    } else {
      return state;
    }
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default ContextProvider;

/*
dispatch and reducer are a general functions to handle any change comes from components to change the state in context
that's by put the type of the change and the payload(what you want to put insted of the data in stste)
*/
