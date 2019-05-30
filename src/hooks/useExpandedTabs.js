import { useState } from "react";

const useExpandedTabs = () => {
  /******************************************************/
  //Selection Type (only one can be open at the same time)
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

  /******************************************************/
  //Dropdown type (any tab can be opened and closed at the same time)
  const [dropdownList, setDropdownList] = useState({});

  const toggleDropdown = name => {
    if (!dropdownList[name] || dropdownList[name] === "closed")
      setDropdownList(prevList => {
        return { ...prevList, [name]: "expanded" };
      });

    if (dropdownList[name] === "expanded")
      setDropdownList(prevList => {
        return { ...prevList, [name]: "closed" };
      });
  };

  return {
    isExpanded,
    currentTab,
    toggleTab,
    closeTab,
    dropdownList,
    toggleDropdown
  };
};

export default useExpandedTabs;
