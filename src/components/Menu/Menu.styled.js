import styled from "styled-components";
import {
  MdPlayArrow,
  MdPause,
  MdColorLens,
  MdLoop,
  MdStop,
  MdEqualizer,
  MdMic,
  MdMicOff
} from "react-icons/md";
import { styleIcons } from "../../utils/helpers";

//Styles to be applied to all imported icons
const iconsStyles = `
color: white;
font-size: 3rem;
cursor: pointer;
border-radius: 15%;
width: 100%;
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
  [MdPlayArrow, MdLoop, MdStop, MdEqualizer, MdMic, MdMicOff, MdColorLens],
  ["Play", "Shuffle", "Stop", "Options", "SoundOn", "SoundOff", "ColorPicker"],
  iconsStyles,
  styled
);

export const MenuBody = styled.div`
  position: fixed;
  top: 5%;
  right: 90%;
  left: 2%;
  bottom: 5%;
  border-radius: 5px;
  ${props => props.expanded && "border-radius: 5px 0 0 5px;"}
  background: linear-gradient(0deg, #3358f4, #1d8cf8);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 5% 2%;
`;

export const ExpandedMenu = styled.div`
  background: linear-gradient(0deg, #2949c9, #1365b1);
  top: 5%;
  left: 10%;
  bottom: 5%;
  right: 60%;
  transition: width 0.15s ease-out, right 0.15s ease-out;
  position: fixed;
  border-radius: 0 5px 5px 0;
  ${({ expanded }) =>
    expanded &&
    "right: 90%;"} /* padding: 5% 2%; */
  /* box-shadow: 11px 0 15px 10px rgba(0, 0, 0, 0.1);  */
`;
