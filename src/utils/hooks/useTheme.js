import { useState } from "react";

const useTheme = () => {
  const [barTopColor, setBarTopColor] = useState("rgba(29, 119, 237, 0.6)");
  const [darkMode, setDarkMode] = useState(true);

  return { theme: { barTopColor, setBarTopColor } };
};

export default useTheme;
