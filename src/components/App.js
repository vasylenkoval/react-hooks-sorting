import React, { useState } from "react";
import SortingTable from "./SortingTable/SortingTable";
import useSorting from "utils/hooks/useSorting";
import SortingContext from "context/Sorting";
import Menu from "./Menu/Menu";

const App = () => {
  const [algorithm, setAlgorithm] = useState("Bubble Sort");
  const [arraySize, setArraySize] = useState(30);
  const [isMuted, setIsMuted] = useState(false);
  const [interval, setInterval] = useState(25);

  //Organizing logic into three
  const sorting = useSorting(arraySize, algorithm, interval);
  const values = { algorithm, arraySize, isMuted, interval };
  const handlers = { setAlgorithm, setArraySize, setIsMuted, setInterval };

  //Preventing context provider from creating a new value on each re-render
  const [sortingContextValue] = useState({ sorting, values, handlers });

  return (
    <SortingContext.Provider value={sortingContextValue}>
      <SortingTable />
      <Menu />
    </SortingContext.Provider>
  );
};

export default App;
