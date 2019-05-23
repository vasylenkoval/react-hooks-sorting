import React, { useState } from "react";
import SortingTable from "./SortingTable/SortingTable";
import useSorting from "utils/hooks/useSorting";
import useTheme from "utils/hooks/useTheme";
import ThemeContext from "context/Theme";
import SortingContext from "context/Sorting";
import Menu from "./Menu/Menu";

const App = () => {
  //Organizing logic into three parts
  const { array, actions, config } = useSorting();
  const { theme } = useTheme();

  return (
    <ThemeContext.Provider value={theme}>
      <SortingContext.Provider value={{ array, actions, config }}>
        <SortingTable />
        <Menu />
      </SortingContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
