import React, { useState, useEffect } from "react";
import SortingTable from "./SortingTable/SortingTable";
import createRandomArr from "../utils/createRandomArr";
import bubbleSort from "../utils/bubbleSort";

const App = () => {
  const [algorithm, setAlgorithm] = useState("Bubble Sort");
  const [currentArray, setCurrentArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [isSorted, setIsSorted] = useState(false);
  const [arraySize, setArraySize] = useState(30);
  const [playbackInterval, setPlaybackInterval] = useState(25);

  const createArray = () => {
    setCurrentArray(createRandomArr(arraySize));
    setIsSorted(false);
  };

  const startBubbleSort = () => {
    const sortingHistory = bubbleSort(currentArray);
    setIsSorting(true);

    for (let i = 0, len = sortingHistory.length; i < len; i++) {
      setTimeout(() => {
        setCurrentArray(sortingHistory[i]);
        if (i === len - 1) {
          setIsSorting(false);
          setIsSorted(true);
        }
      }, (i + 1) * parseInt(playbackInterval));
    }
  };

  return (
    <SortingTable
      currentAlgorithm={algorithm}
      array={currentArray}
      start={startBubbleSort}
      isSorting={isSorting}
      isSorted={isSorted}
      randomize={createArray}
    />
  );
};

export default App;

// class App extends Component {
//   state = {
//     currentAlgorithm: "Bubble Sort",
//     array: [],
//     size: "80",
//     interval: "25",
//     isSorting: false,
//     isSorted: false
//   };

//   componentDidMount() {
//     this.createArray();
//   }

//   changeAlgorithm = algorithm => {
//     this.setState({ currentAlgorithm: algorithm });
//   };

//   startBubbleSort = () => {
//     const { array, interval } = this.state;
//     const sortingHistory = bubbleSort(array);
//     const len = sortingHistory.length;

//     this.setState({ isSorting: true });

//     for (let i = 0; i < len; i++) {
//       setTimeout(() => {
//         this.setState({ array: sortingHistory[i] });
//         if (i === len - 1) this.setState({ isSorting: false, isSorted: true });
//       }, (i + 1) * parseInt(interval));
//     }
//   };

//   createArray = () => {
//     const { size } = this.state;
//     const arr = createRandomArr(size);
//     this.setState({ array: [...arr], isSorted: false });
//   };

//   render() {
//     const { currentAlgorithm, array, isSorting, isSorted } = this.state;
//     return (
//       <SortingTable
//         currentAlgorithm={currentAlgorithm}
//         array={array}
//         start={this.startBubbleSort}
//         isSorting={isSorting}
//         isSorted={isSorted}
//         randomize={this.createArray}
//       />
//     );
//   }
// }

// export default App;
