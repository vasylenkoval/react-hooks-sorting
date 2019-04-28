import React, { Component } from "react";
import SortingTable from "./SortingTable/SortingTable";

class App extends Component {
  state = {
    currentAlgorithm: "bubblesort"
  };

  changeAlgorithm = algorithm => {
    this.setState({ currentAlgorithm: algorithm });
  };

  render() {
    const { currentAlgorithm } = this.state;
    return <SortingTable currentAlgorithm={currentAlgorithm} />;
  }
}

export default App;
