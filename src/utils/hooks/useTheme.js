import { useState } from "react";

const useTheme = () => {
  const [barTop, setBarTop] = useState("rgba(29, 119, 237, 0.6)");
  const [barBottom, setBarBottom] = useState("rgba(0, 0, 0, 0)");
  const [barBorder, setBarBorder] = useState("rgb(29, 119, 237)");
  const [selectedBar, setSelectedBar] = useState("rgba(156, 10, 0, .5)");

  const [darkMode, setDarkMode] = useState(true);

  return {
    darkMode: darkMode,
    colors: { barTop, barBottom, barBorder, selectedBar },
    handlers: {
      setBarTop,
      setBarBottom,
      setBarBorder,
      setSelectedBar,
      setDarkMode
    }
  };
};

export default useTheme;
