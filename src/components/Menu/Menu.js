import React, { useContext } from "react";
import {
  MenuBody,
  Icons,
  ExpandedMenu,
  ExpandedTitle,
  ExpandedContent,
  Backdrop
} from "./Menu.styled";
import SortingOptionsTab from "../Tabs/SortingOptionsTab";
import SortingContext from "context/Sorting";
import useExpandedTabs from "utils/hooks/useExpandedTabs";

const Menu = () => {
  const { sorting, values, handlers } = useContext(SortingContext);
  const [isExpanded, currentTab, toggleTab, closeTab] = useExpandedTabs();

  //Switching between Play, Stop and Shuffle buttons
  const renderPlayControls = () => {
    if (sorting.isSorting) return <Icons.Stop onClick={sorting.stop} />;
    if (sorting.isSorted) return <Icons.Shuffle onClick={sorting.randomize} />;
    else
      return (
        <Icons.Play
          onClick={() => {
            sorting.start();
            closeTab();
          }}
        />
      );
  };

  //Switching between Muted and Unmuted buttons
  const renderSoundControls = () => {
    if (values.isMuted)
      return <Icons.SoundOff onClick={() => handlers.setIsMuted(false)} />;
    else return <Icons.SoundOn onClick={() => handlers.setIsMuted(true)} />;
  };

  return (
    <>
      {/* Backdrop for the expanded menu */}
      {isExpanded && <Backdrop onClick={closeTab} />}

      {/* Main menu */}
      <MenuBody isExpanded={isExpanded}>
        {renderPlayControls()}
        <Icons.Options onClick={() => toggleTab("Sorting Options")} />
        {renderSoundControls()}
        <Icons.Customize onClick={() => toggleTab("Customize")} />
        <Icons.Contact onClick={() => toggleTab("Contact Me")} />
      </MenuBody>

      {/* Expanded Menu*/}
      <ExpandedMenu isExpanded={isExpanded}>
        <ExpandedTitle>{currentTab}</ExpandedTitle>
        <ExpandedContent>
          <SortingOptionsTab />
        </ExpandedContent>
      </ExpandedMenu>
    </>
  );
};

export default Menu;
