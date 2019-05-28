import { useState, useEffect, useCallback } from "react";
import { createRandomArr } from "utils/helpers";
import sortingAlgorithms from "utils/sorting/sortingAlgorithms";

const useSorting = defaults => {
  const [algorithm, setAlgorithm] = useState(defaults.algorithm);
  const [arraySize, setArraySize] = useState(defaults.arraySize);
  const [interval, setSortingInterval] = useState(defaults.interval);
  const [currentArray, setCurrentArray] = useState(createRandomArr(arraySize));
  const [isSorting, setIsSorting] = useState(false);
  const [isSorted, setIsSorted] = useState(false);
  const [isMuted, setIsMuted] = useState(defaults.isMuted);
  const [smoothAnimation, setSmoothAnimation] = useState(true);

  // Shuffles the array
  const shuffle = useCallback(() => {
    setCurrentArray(createRandomArr(arraySize));
    setIsSorted(false);
  }, [arraySize]);

  const stop = useCallback(() => {
    // set a fake timeout to get the highest timeout id and clear all timeouts that come before
    let timeoutId = setTimeout(() => null, 0);
    while (timeoutId >= 0) {
      clearTimeout(timeoutId);
      timeoutId--;
    }
    //stop sorting and create new shuffled array
    setIsSorting(false);
  }, []);

  //Stops and Shuffles the array if user triggered arraySize change
  useEffect(() => {
    stop();
    shuffle();
  }, [arraySize, interval, algorithm, shuffle, stop]);

  //Starts sorting based on provided algorithm and playback interval
  const start = () => {
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
      }, (i + 1) * parseInt(interval));
    }
  };

  return {
    array: {
      currentArray,
      isSorting,
      isSorted
    },
    actions: {
      shuffle,
      start,
      stop
    },
    config: {
      algorithm,
      setAlgorithm,
      arraySize,
      setArraySize,
      interval,
      setSortingInterval,
      isMuted,
      setIsMuted,
      smoothAnimation,
      setSmoothAnimation
    }
  };
};

export default useSorting;
