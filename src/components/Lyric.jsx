import React, { Component } from "react";
class Lyric extends Component {
  state = {};
  render() {
    console.log(this.props.match.params.id);
    return <div>lyric id {this.props.match.params.id}</div>;
  }
}

export default Lyric;
