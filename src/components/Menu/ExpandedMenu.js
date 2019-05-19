import React, { useState } from "react";
import {
  ExpandedMenuBody,
  ExpandedTitle,
  ExpandedContent
} from "./ExpandedMenu.styled";

const ExpandedMenu = ({ isExpanded, tabName }) => {
  const renderSortingOptionsTab = () => {
    return <ExpandedContent>Hello jdfjdsiofjsdiojfsoid</ExpandedContent>;
  };

  return (
    <ExpandedMenuBody isExpanded={isExpanded}>
      <ExpandedTitle>{tabName}</ExpandedTitle>
      {tabName === "Sorting Options" && renderSortingOptionsTab()}
    </ExpandedMenuBody>
  );
};

export default ExpandedMenu;
