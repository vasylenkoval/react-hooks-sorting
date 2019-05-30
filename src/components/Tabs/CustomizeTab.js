import React, { useContext } from "react";

import {
  ColorPickerItem,
  ColorPickerWrapper,
  CustomizeDropdown,
  DropdownLabel
} from "./CustomizeTab.styled";
import { colorsArr, labels } from "./CustomizeTab.metadata";
import useExpandedTabs from "hooks/useExpandedTabs";
import ThemeContext from "context/Theme";

const CustomizeTab = () => {
  const { colors, handlers } = useContext(ThemeContext);
  const { dropdownList, toggleDropdown } = useExpandedTabs();

  const renderColorDropdowns = () => {
    return labels.map(label => {
      return (
        <CustomizeDropdown
          key={label.name}
          expanded={dropdownList[label.name] === "expanded"}
        >
          <DropdownLabel onClick={e => toggleDropdown(label.name)}>
            {label.name}
          </DropdownLabel>
          <ColorPickerWrapper>
            {dropdownList[label.name] === "expanded" &&
              colorsArr.map(color => (
                <ColorPickerItem
                  key={color}
                  type="button"
                  selected={colors[label.stateName] === color}
                  color={color}
                  onClick={() => handlers[label.handler](color)}
                />
              ))}
          </ColorPickerWrapper>
        </CustomizeDropdown>
      );
    });
  };

  const handleSubmit = () => {
    return false;
  };

  return <form onSubmit={handleSubmit}>{renderColorDropdowns()}</form>;
};

export default CustomizeTab;
