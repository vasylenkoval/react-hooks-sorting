import React, { useState } from "react";
import SortingTable from "./SortingTable/SortingTable";
import useSorting from "utils/hooks/useSorting";
import useTheme from "utils/hooks/useTheme";
import ThemeContext from "context/Theme";
import SortingContext from "context/Sorting";
import Menu from "./Menu/Menu";

const defaultValues = {
  algorithm: "Insertion Sort",
  arraySize: 25,
  interval: 200,
  isMuted: false
};

const App = () => {
  const { array, actions, config } = useSorting(defaultValues);
  const { colors, handlers } = useTheme();

  return (
    <ThemeContext.Provider value={{ colors, handlers }}>
      <SortingContext.Provider value={{ array, actions, config }}>
        <SortingTable />
        <Menu />
      </SortingContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
