import { useState } from "react";

const useExpandedTabs = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentTab, setCurrentTab] = useState(null);

  const toggleTab = tabName => {
    //Prevent tab from closing when switching to the other tab
    if (isExpanded && currentTab !== tabName) {
      setCurrentTab(tabName);
    } else {
      setIsExpanded(!isExpanded);
      setCurrentTab(tabName);
    }
  };

  const closeTab = () => setIsExpanded(false);

  return [isExpanded, currentTab, toggleTab, closeTab];
};

export default useExpandedTabs;
