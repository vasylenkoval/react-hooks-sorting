import React from "react";
import { MenuBody, Icons } from "./Menu.styled";
import useExpandedTabs from "../../utils/hooks/useExpandedTabs";
import ExpandedMenu from "./ExpandedMenu";
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
      {renderPlayControls()}
      <Icons.Options onClick={() => toggleTab("Sorting Options")} />
      {renderSoundControls()}
      <Icons.Customize onClick={() => toggleTab("Customize")} />
      <ExpandedMenu isExpanded={isExpanded} tabName={currentTab} />
    </MenuBody>
  );
};

export default Menu;
