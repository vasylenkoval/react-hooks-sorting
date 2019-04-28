import React, { Component } from "react";

import bubbleSort from "../../utils/bubbleSort";
import createRandomArr from "../../utils/createRandomArr";
import {
  Table,
  TableItem,
  Input,
  Title,
  TableWrapper
} from "./SortingTable-styled";

let timeout;

class SortingTable extends Component {
  state = {
    array: [],
    size: "50",
    interval: "10"
  };

  componentDidMount() {
    this.renderArr();
  }

  renderArr = () => {
    const { size } = this.state;
    const arr = createRandomArr(size);
    this.setState({ array: [...arr] });
  };

  handleSizeChange = e => {
    this.setState(
      {
        size: e.target.value
      },
      () => {
        this.renderArr();
      }
    );
  };

  handleIntervalChange = e => {
    this.setState({
      interval: e.target.value
    });
  };

  startBubbleSort = () => {
    const { array, interval } = this.state;
    const sortingHistory = bubbleSort(array);
    for (let i = 0; i < sortingHistory.length; i++) {
      timeout = setTimeout(() => {
        this.setState({ array: sortingHistory[i] });
      }, (i + 1) * parseInt(interval));
    }
  };

  renderArray = () => {
    return this.state.array.map((number, index, arr) => {
      return (
        <TableItem
          height={`${(number / arr.length) * 90}%`}
          width={`${100 / arr.length}%`}
        />
      );
    });
  };

  render() {
    const { array, size, interval } = this.state;
    const { currentAlgorithm } = this.props;
    return (
      <TableWrapper>
        <Title>{currentAlgorithm}</Title>
        <Table>{this.renderArray()}</Table>
        <button onClick={this.startBubbleSort}>Start bubble-sort</button>
        <div>Enter array size: </div>
        <Input
          onChange={this.handleSizeChange}
          type="number"
          name="size"
          id="size"
          value={size}
        />
        <div>Enter interval (milliseconds): </div>
        <input
          onChange={this.handleIntervalChange}
          type="number"
          name="interval"
          id="interval"
          value={interval}
        />
      </TableWrapper>
    );
  }
}

export default SortingTable;
