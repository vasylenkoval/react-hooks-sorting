import React, { useState, useEffect } from "react";
import SortingTable from "./SortingTable/SortingTable";
import createRandomArr from "../utils/createRandomArr";
import sortingAlgorithms from "../utils/sorting/sortingAlgorithms";
import Menu from "./Menu/Menu";

const App = () => {
  const [algorithm, setAlgorithm] = useState("Bubble Sort");
  const [arraySize, setArraySize] = useState(40);
  const [currentArray, setCurrentArray] = useState(createRandomArr(arraySize));
  const [isSorting, setIsSorting] = useState(false);
  const [isSorted, setIsSorted] = useState(false);
  const [playbackInterval, setPlaybackInterval] = useState(25);
  const [isMuted, setIsMuted] = useState(false);

  const createArray = () => {
    setCurrentArray(createRandomArr(arraySize));
    setIsSorted(false);
  };

  const startSorting = () => {
    const sortingHistory = sortingAlgorithms[algorithm](currentArray);
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
    <>
      <Menu />
      <SortingTable
        currentAlgorithm={algorithm}
        array={currentArray}
        start={startSorting}
        isSorting={isSorting}
        isSorted={isSorted}
        randomize={createArray}
      />
    </>
  );
};

export default App;
