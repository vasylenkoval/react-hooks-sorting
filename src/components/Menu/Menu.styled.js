import styled from "styled-components";
import {
  MdPlayArrow,
  MdColorLens,
  MdLoop,
  MdStop,
  MdEqualizer,
  MdVolumeUp,
  MdVolumeOff,
  MdPermIdentity
} from "react-icons/md";
import { styleIcons } from "utils/helpers";

//Styles to be applied to all imported icons
const iconsStyles = `
color: white;
font-size: 3rem;
cursor: pointer;
border-radius: 15%;
width: 100%;
position: relative;
transition: transform .1s, color .1s;
/* Enable hover only for desktop */
  @media (min-width: 1100px) {
    cursor: pointer;
    &:hover {
      background: rgba(0, 0, 0, 0.1);
      color: lightgrey;
      }
    }
  }
&:active {
  color: rgba(180, 180, 180);
  transform: scale(0.9);
}
`;

//Wrapping imported icons with styled components and saving it on an object
export const Icons = styleIcons(
  [
    MdPlayArrow,
    MdLoop,
    MdStop,
    MdEqualizer,
    MdVolumeUp,
    MdVolumeOff,
    MdColorLens,
    MdPermIdentity
  ],
  [
    "Play",
    "Shuffle",
    "Stop",
    "Options",
    "SoundOn",
    "SoundOff",
    "Customize",
    "Contact"
  ],
  iconsStyles,
  styled
);

export const MenuBody = styled.div`
  position: fixed;
  z-index: 0;
  top: 5%;
  right: 90%;
  left: 2%;
  bottom: 5%;
  border-radius: 5px;
  transition: border-radius 1s;
  ${({ isExpanded }) =>
    isExpanded && "border-radius: 5px 0 0 5px; transition: border-radius .1s;"}
  background: linear-gradient(0deg, #3358f4, #1d8cf8);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 5% 2%;
  outline: none;

  /* Mobile Styles */
  @media (max-width: 560px) {
    top: 85%;
    right: 2%;
    bottom: 2%;
    align-items: center;
    flex-wrap: nowrap;
    padding: 0;

    ${({ isExpanded }) =>
      isExpanded &&
      "border-radius: 0 0 5px 5px ; transition: border-radius .1s;"}
  }
`;

export const ExpandedMenu = styled.div`
  background: linear-gradient(0deg, #2949c9, #1365b1);
  top: 5%;
  left: 10%;
  bottom: 5%;
  right: 60%;
  transition: right 0.15s ease-out;
  position: fixed;
  border-radius: 0 5px 5px 0;
  box-shadow: 25px 0 20px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  overflow-y: scroll;
  white-space: nowrap;
  ${({ isExpanded }) =>
    isExpanded ? "min-width: 300px;" : "right: 90%; box-shadow: none;"}

  /* Mobile Styles */
  @media (max-width: 560px) {
    top: 20%;
    right: 2%;
    left: 2%;
    bottom: 15%;
    border-radius: 5px 5px 0 0;
    transition: top 0.15s ease-out;

    ${({ isExpanded }) => (isExpanded ? "" : "top: 90%; box-shadow: none;")}
  }
`;

export const ExpandedTitle = styled.h3`
  position: absolute;
  color: white;
  font-size: 2rem;
  font-weight: 300;
  top: 15px;
  left: 30px;
`;

export const ExpandedContent = styled.div`
  padding: 80px 30px 30px 30px;
`;

export const Backdrop = styled.div`
  background: rgba(0, 0, 0, 0.45);
  animation: fadein 0.7s;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
