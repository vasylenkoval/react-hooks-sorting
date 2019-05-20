import styled from "styled-components";

//Inputs
export const Select = styled.select`
  -webkit-appearance: button;
  -moz-appearance: button;
  -webkit-user-select: none;
  -moz-user-select: none;
  -webkit-padding-end: 20px;
  -moz-padding-end: 20px;
  -webkit-padding-start: 2px;
  -moz-padding-start: 2px;
  background: rgba(255, 255, 255, 0.1);
  font-size: 16px;
  border: 1px solid lightgrey;
  border-radius: 6px;
  display: block;
  outline: none;
  padding: 11px;
  width: 100%;
  margin: 5px 0;
`;

export const Label = styled.label`
  font-size: 1.5rem;
  color: lightgrey;
  font-weight: 300;
  padding-left: 3px;
`;
