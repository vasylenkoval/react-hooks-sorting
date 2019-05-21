import React, { useState } from "react";
import SortingTable from "./SortingTable/SortingTable";
import useSorting from "utils/hooks/useSorting";
import SortingContext from "context/Sorting";
import Menu from "./Menu/Menu";

const App = () => {
  const [algorithm, setAlgorithm] = useState("Bubble Sort");
  const [arraySize, setArraySize] = useState(25);
  const [isMuted, setIsMuted] = useState(false);
  const [interval, setInterval] = useState(50);

  //Organizing logic into three parts
  const sorting = useSorting(arraySize, algorithm, interval);
  const values = { algorithm, arraySize, isMuted, interval };
  const handlers = { setAlgorithm, setArraySize, setIsMuted, setInterval };

  return (
    <SortingContext.Provider value={{ sorting, values, handlers }}>
      <SortingTable />
      <Menu />
    </SortingContext.Provider>
  );
};

export default App;
