import { useState } from "react";

const useTheme = () => {
  const [barTop, setBarTop] = useState("rgba(29, 119, 237, 0.6)");
  const [barBottom, setBarBottom] = useState("rgba(0, 0, 0, 0)");
  const [barBorder, setBarBorder] = useState("rgb(29, 119, 237)");
  const [selectedBottom, setSelectedBottom] = useState("rgba(156, 10, 0, .5)");
  const [selectedTop, setSelectedTop] = useState("rgba(156, 10, 0, 1)");

  const [darkMode, setDarkMode] = useState(true);

  return {
    darkMode: darkMode,
    colors: { barTop, barBottom, barBorder, selectedBottom, selectedTop },
    handlers: {
      setBarTop,
      setBarBottom,
      setBarBorder,
      setSelectedBottom,
      setSelectedTop,
      setDarkMode
    }
  };
};

export default useTheme;
