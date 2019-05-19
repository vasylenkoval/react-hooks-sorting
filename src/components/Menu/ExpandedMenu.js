import React, { useState } from "react";
import { ExpandedMenuBody } from "./ExpandedMenu.styled";

const ExpandedMenu = ({ expanded }) => {
  return <ExpandedMenuBody expanded={expanded} />;
};

export default ExpandedMenu;
