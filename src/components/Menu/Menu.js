import React, { useState } from "react";
import { MenuBody, Icons, ExpandedMenu } from "./Menu.styled";
const Menu = ({ start, stop, isSorting, isSorted, randomize }) => {
  const [expanded, setExpanded] = useState(false);

  const renderPlayControls = () => {
    if (isSorting) return <Icons.Stop onClick={stop} />;
    if (isSorted) return <Icons.Shuffle onClick={randomize} />;
    else return <Icons.Play onClick={start} />;
  };

  return (
    <MenuBody expanded={expanded}>
      {renderPlayControls()}
      <Icons.Options onClick={() => setExpanded(!expanded)} />
      <Icons.SoundOn />
      <Icons.SoundOff />
      <Icons.ColorPicker />
      <ExpandedMenu expanded={expanded} />
    </MenuBody>
  );
};

export default Menu;
