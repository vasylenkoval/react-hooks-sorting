import { useState } from "react";
import { createRandomArr } from "utils/helpers";
import sortingAlgorithms from "utils/sorting/sortingAlgorithms";

const useSorting = (arraySize, algorithm, playbackInterval) => {
  const [currentArray, setCurrentArray] = useState(createRandomArr(arraySize));
  const [isSorting, setIsSorting] = useState(false);
  const [isSorted, setIsSorted] = useState(false);

  // Creates a new shuffled array with provided array size
  const createArray = () => {
    setCurrentArray(createRandomArr(arraySize));
    setIsSorted(false);
  };

  const stopSorting = () => {
    // set a fake timeout to get the highest timeout id and clear all timeouts that come before
    let timeoutId = setTimeout(() => null, 0);
    while (timeoutId >= 0) {
      clearTimeout(timeoutId);
      timeoutId--;
    }
    //stop sorting and create new shuffled array
    setIsSorting(false);
    createArray();
  };

  //Starts sorting based on provided algorithm and playback interval
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

  return {
    currentArray,
    isSorting,
    isSorted,
    createArray,
    startSorting,
    stopSorting
  };
};

export default useSorting;
