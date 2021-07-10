import React, { Component } from "react";
import Posts from "./Posts";
import ShowClickUsingHooks from './ShowClickUsingHooks'


class App extends Component {
  render() {
    return <div style={{margin:'10px'}}>
      {/* <ShowClickUsingHooks/> */}
      <Posts />
    </div>;
  }
}

export default App;
