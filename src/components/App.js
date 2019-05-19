import React, { useState, useEffect } from "react";
import SortingTable from "./SortingTable/SortingTable";
import { createRandomArr } from "../utils/helpers";
import sortingAlgorithms from "../utils/sorting/sortingAlgorithms";
import Menu from "./Menu/Menu";

const App = () => {
  const [algorithm, setAlgorithm] = useState("Bubble Sort");
  const [arraySize, setArraySize] = useState(30);
  const [currentArray, setCurrentArray] = useState(createRandomArr(arraySize));
  const [isSorting, setIsSorting] = useState(false);
  const [isSorted, setIsSorted] = useState(false);
  const [playbackInterval, setPlaybackInterval] = useState(25);
  const [isMuted, setIsMuted] = useState(false);
  const [timeoutsCount, setTimeoutsCount] = useState(0);

  const createArray = () => {
    setCurrentArray(createRandomArr(arraySize));
    setIsSorted(false);
  };

  const stopSorting = () => {
    // Set a fake timeout to get the highest timeout id
    let timeoutId = setTimeout(() => null, 0);
    while (timeoutId >= 0) {
      clearTimeout(timeoutId);
      timeoutId--;
    }
    //Stop sorting and shuffle the array
    setIsSorting(false);
    createArray();
  };

  const startSorting = () => {
    const sortingHistory = sortingAlgorithms[algorithm](currentArray);
    const len = sortingHistory.length;
    setIsSorting(true);

    for (let i = 0; i < len; i++) {
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
      <Menu
        start={startSorting}
        stop={stopSorting}
        isSorting={isSorting}
        isSorted={isSorted}
        randomize={createArray}
        isMuted={isMuted}
      />
      <SortingTable currentAlgorithm={algorithm} array={currentArray} />
    </>
  );
};

export default App;
