import styled from "styled-components";

export const ExpandedMenuBody = styled.div`
  background: linear-gradient(0deg, #2949c9, #1365b1);
  top: 5%;
  left: 10%;
  bottom: 5%;
  right: 60%;
  transition: width 0.15s ease-out, right 0.15s ease-out;
  position: fixed;
  border-radius: 0 5px 5px 0;
  ${({ expanded }) => !expanded && "right: 90%;"}
  box-shadow: 11px 0 15px 10px rgba(0, 0, 0, 0.1);
`;
