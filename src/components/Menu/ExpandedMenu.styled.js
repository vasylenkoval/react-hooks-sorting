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
  box-shadow: 25px 0 20px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  white-space: nowrap;
  ${({ isExpanded }) => !isExpanded && "right: 90%; box-shadow: none;"}
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
  padding: 30px;
`;
