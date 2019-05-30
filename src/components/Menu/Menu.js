import React, { useContext, useEffect, useState } from "react";
import { checkIfMobile } from "utils/helpers";
import {
  MenuBody,
  Icons,
  ExpandedMenu,
  ExpandedTitle,
  ExpandedContent,
  Backdrop
} from "./Menu.styled";
import SortingOptionsTab from "../Tabs/SortingOptionsTab";
import CustomizeTab from "../Tabs/CustomizeTab";
import ContactTab from "../Tabs/ContactTab";
import SortingContext from "context/Sorting";
import useExpandedTabs from "hooks/useExpandedTabs";

const Menu = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { array, actions, config } = useContext(SortingContext);
  const { isExpanded, currentTab, toggleTab, closeTab } = useExpandedTabs();

  //Detects if user is using a mobile device and disables audio
  useEffect(() => {
    if (checkIfMobile()) {
      setIsMobile(true);
      config.setIsMuted(true);
      config.setArraySize(10);
    }
  }, [config, config.setIsMuted, setIsMobile]);

  //Switching between Play, Stop and Shuffle buttons
  const renderPlayControls = () => {
    if (array.isSorted) return <Icons.Shuffle onClick={actions.shuffle} />;
    if (array.isSorting)
      return (
        <Icons.Stop
          onClick={() => {
            actions.stop();
            actions.shuffle();
          }}
        />
      );
    return (
      <Icons.Play
        onClick={() => {
          actions.start();
          closeTab();
        }}
      />
    );
  };

  //Switching between Muted and Unmuted buttons
  const renderSoundControls = () => {
    if (isMobile) return null;
    if (config.isMuted)
      return <Icons.SoundOff onClick={() => config.setIsMuted(false)} />;
    return <Icons.SoundOn onClick={() => config.setIsMuted(true)} />;
  };

  //Showing a correct tab
  const renderTabs = tab => {
    return (
      <ExpandedContent>
        {tab === "Sorting Options" && <SortingOptionsTab closeTab={closeTab} />}
        {tab === "Customize" && <CustomizeTab closeTab={closeTab} />}
        {tab === "Contact Me" && <ContactTab closeTab={closeTab} />}
      </ExpandedContent>
    );
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
        {renderTabs(currentTab)}
      </ExpandedMenu>
    </>
  );
};

export default Menu;
