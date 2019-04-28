import React, { Component } from "react";
import SortingTable from "./SortingTable/SortingTable";
import createRandomArr from "../utils/createRandomArr";
import bubbleSort from "../utils/bubbleSort";

class App extends Component {
  state = {
    currentAlgorithm: "Bubble Sort",
    array: [],
    size: "50",
    interval: "20"
  };

  componentDidMount() {
    this.createArray();
  }

  changeAlgorithm = algorithm => {
    this.setState({ currentAlgorithm: algorithm });
  };

  startBubbleSort = () => {
    const { array, interval } = this.state;
    const sortingHistory = bubbleSort(array);
    for (let i = 0; i < sortingHistory.length; i++) {
      setTimeout(() => {
        this.setState({ array: sortingHistory[i] });
      }, (i + 1) * parseInt(interval));
    }
  };

  createArray = () => {
    const { size } = this.state;
    const arr = createRandomArr(size);
    this.setState({ array: [...arr] });
  };

  render() {
    const { currentAlgorithm, array } = this.state;
    return (
      <SortingTable
        currentAlgorithm={currentAlgorithm}
        array={array}
        start={this.startBubbleSort}
      />
    );
  }
}

export default App;
