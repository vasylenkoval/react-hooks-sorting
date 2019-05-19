import React from "react";
import {
  MenuBody,
  Icons,
  ExpandedMenu,
  ExpandedTitle,
  ExpandedContent
} from "./Menu.styled";
import SortingOptionsTab from "../Tabs/SortingOptionsTab";
import useExpandedTabs from "utils/hooks/useExpandedTabs";
const Menu = ({
  start,
  stop,
  mute,
  randomize,
  isSorting,
  isSorted,
  isMuted
}) => {
  const [isExpanded, currentTab, toggleTab, closeTab] = useExpandedTabs();

  //Switching between Play, Stop and Shuffle buttons
  const renderPlayControls = () => {
    if (isSorting) return <Icons.Stop onClick={stop} />;
    if (isSorted) return <Icons.Shuffle onClick={randomize} />;
    else
      return (
        <Icons.Play
          onClick={() => {
            start();
            closeTab();
          }}
        />
      );
  };

  //Switching between Muted and Unmuted buttons
  const renderSoundControls = () => {
    if (isMuted) return <Icons.SoundOff onClick={() => mute(false)} />;
    else return <Icons.SoundOn onClick={() => mute(true)} />;
  };

  return (
    <MenuBody
      isExpanded={isExpanded}
      //setting tab index to enable onBlur
      tabIndex="1"
      onBlur={closeTab}
    >
      {/* Menu Controls */}
      {renderPlayControls()}
      <Icons.Options onClick={() => toggleTab("Sorting Options")} />
      {renderSoundControls()}
      <Icons.Customize onClick={() => toggleTab("Customize")} />

      {/* Expanded Menu */}
      <ExpandedMenu isExpanded={isExpanded} tabName={currentTab}>
        <ExpandedTitle>{currentTab}</ExpandedTitle>
        <ExpandedContent>
          <SortingOptionsTab />
        </ExpandedContent>
      </ExpandedMenu>
    </MenuBody>
  );
};

export default Menu;
