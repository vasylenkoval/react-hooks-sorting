import React, { useState, useEffect } from "react";
import SortingTable from "./SortingTable/SortingTable";
import useSorting from "../utils/hooks/useSorting";
import Menu from "./Menu/Menu";

const App = () => {
  const [algorithm, setAlgorithm] = useState("Bubble Sort");
  const [arraySize, setArraySize] = useState(30);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackInterval, setPlaybackInterval] = useState(25);

  const {
    currentArray,
    isSorting,
    isSorted,
    createArray,
    startSorting,
    stopSorting
  } = useSorting(arraySize, algorithm, playbackInterval);

  return (
    <>
      <SortingTable
        currentAlgorithm={algorithm}
        array={currentArray}
        isMuted={isMuted}
      />
      <Menu
        start={startSorting}
        stop={stopSorting}
        isSorting={isSorting}
        isSorted={isSorted}
        randomize={createArray}
        isMuted={isMuted}
        mute={setIsMuted}
      />
    </>
  );
};

export default App;
