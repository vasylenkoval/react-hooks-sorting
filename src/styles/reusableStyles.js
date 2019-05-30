import styled from "styled-components";
import { styleIcons } from "utils/helpers";
import {
  TiSocialGithub,
  TiSocialTwitter,
  TiSocialLinkedin
} from "react-icons/ti";

export const Select = styled.select`
  -webkit-appearance: button;
  -moz-appearance: button;
  -webkit-user-select: none;
  -moz-user-select: none;
  -webkit-padding-end: 20px;
  -moz-padding-end: 20px;
  -webkit-padding-start: 2px;
  -moz-padding-start: 2px;
  background: rgba(255, 255, 255, 0.5);
  font-size: 16px;
  border: none;
  border-radius: 6px;
  display: block;
  outline: none;
  padding: 11px;
  width: 100%;
  margin: 5px 0;
  color: black;
  font-weight: 300;
  position: relative;
`;

export const Label = styled.label`
  font-size: 1.5rem;
  color: white;
  font-weight: 300;
  padding-left: 3px;
  margin-bottom: 20px;
  display: block;
`;

export const Button = styled.button`
  margin: 0;
  padding: 0;
  display: inline-block;
  padding: 13px 25px;
  border: 1px solid blue;
  background: #0d268b;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.4rem;
  font-weight: 300;
  &:hover {
    background: #0d268b;
  }
  &:disabled {
    background: lightgrey;
  }
`;

export const Text = styled.p`
  font-size: 1.5rem;
  color: white;
  font-weight: 300;
  margin-bottom: 20px;
  display: block;
  width: ${({ expandedText }) => (expandedText ? "25vw" : "100%")};
`;

// Social Media Icons
//Styles to be applied to all imported social media icons
const socialIconsStyles = `
color: white;
font-size: 3rem;
cursor: pointer;
border-radius: 15%;
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
export const SocialIcons = styleIcons(
  [TiSocialGithub, TiSocialTwitter, TiSocialLinkedin],
  ["Github", "Twitter", "Linkedin"],
  socialIconsStyles,
  styled
);
