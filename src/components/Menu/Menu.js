import React, { useState } from "react";
import { MenuBody, Icons } from "./Menu.styled";
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
  const [expanded, setExpanded] = useState(false);

  const renderPlayControls = () => {
    if (isSorting) return <Icons.Stop onClick={stop} />;
    if (isSorted) return <Icons.Shuffle onClick={randomize} />;
    else return <Icons.Play onClick={start} />;
  };

  const renderSoundControls = () => {
    if (isMuted) return <Icons.SoundOff onClick={() => mute(false)} />;
    else return <Icons.SoundOn onClick={() => mute(true)} />;
  };

  return (
    <MenuBody expanded={expanded}>
      {renderPlayControls()}
      <Icons.Options onClick={() => setExpanded(!expanded)} />
      {renderSoundControls()}
      <Icons.ColorPicker />
      <ExpandedMenu expanded={expanded} />
    </MenuBody>
  );
};

export default Menu;
