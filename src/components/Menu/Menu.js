import React from "react";
import { MenuBody, Icons } from "./Menu.styled";
const Menu = ({ start, stop, isSorting, isSorted, randomize }) => {
  const renderPlayControls = () => {
    if (isSorting) return <Icons.Stop onClick={stop} />;
    if (isSorted) return <Icons.Shuffle onClick={randomize} />;
    else return <Icons.Play onClick={start} />;
  };

  return (
    <MenuBody>
      {renderPlayControls()}
      <Icons.Options />
      <Icons.SoundOn />
      <Icons.SoundOff />
      <Icons.ColorPicker />
    </MenuBody>
  );
};

export default Menu;
