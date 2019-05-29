import { useState } from "react";

const useTheme = () => {
  const [barTop, setBarTop] = useState("rgba(29, 119, 237, 0.6)");
  const [barBottom, setBarBottom] = useState("rgba(0, 0, 0, 0)");
  const [barBorder, setBarBorder] = useState("rgb(29, 119, 237)");
  const [selectedBar, setSelectedBar] = useState("rgba(156, 10, 0, .5)");
  const [background, setBackground] = useState("#27293d");

  const [darkMode, setDarkMode] = useState(true);

  return {
    darkMode: darkMode,
    colors: { barTop, barBottom, barBorder, selectedBar, background },
    handlers: {
      setBarTop,
      setBarBottom,
      setBarBorder,
      setSelectedBar,
      setDarkMode,
      setBackground
    }
  };
};

export default useTheme;
