import styled from "styled-components";

export const Input = styled.input``;

export const TableWrapper = styled.div`
  position: relative;
`;

export const Title = styled.h1`
  position: absolute;
  top: 20px;
  left: 20px;
  font-weight: 300;
  font-size: 1rem;
`;

export const Table = styled.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  height: 400px;
  padding: 100px;
`;

export const TableItem = styled.div`
  margin: 0 3px;
  margin-top: auto;
  height: ${props => (props.height ? props.height : "50%")};
  width: ${props => (props.width ? props.width : "10%")};
  background: linear-gradient(to bottom, rgb(140, 107, 255), rgb(13, 98, 218));
`;
