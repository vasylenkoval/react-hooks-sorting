import styled from "styled-components";
import { Label } from "styles/reusableStyles";

export const CustomizeDropdown = styled.div`
  height: ${({ expanded }) => (expanded ? "300px" : "40px")};
  border-bottom: 1px solid white;
  position: relative;
  margin-bottom: 20px;
  transition: height 0.2s;
  overflow: hidden;
`;

export const ColorPickerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
  height: 220px;
  overflow-y: scroll;
`;

export const ColorPickerItem = styled.button`
  width: 30px;
  height: 30px;
  background-color: ${({ color }) => color};
  cursor: pointer;
  margin: 3px;
  border-radius: 5px;
  border: ${({ selected }) => (selected ? `2px solid #222222` : "none")};
  outline-color: salmon;
`;

export const DropdownLabel = styled(Label)`
padding: 5px;
  position: relative;
  border-radius: 5px;

  &::after {
    content: "˅";
    transform: scaleX(1.2);
    font-size: 3.5rem;
    color: white;
    font-weight: 300;
    position: absolute;
    top: 2px;
    right: 5px;
  }

  /* Enable hover only for desktop */
  @media (min-width: 1100px) {
    cursor: pointer;
    &:hover {
      background: rgba(0, 0, 0, 0.1);
      color: lightgrey;
      &::after {
        color: lightgrey;
      }
      }
    }
  }

`;
