import styled from "styled-components";

export const TableWrapper = styled.div`
  position: relative;
`;

export const Button = styled.button`
  display: block;
  margin: 20px auto;
  border: 1px solid white;
  padding: 10px 20px;
  border-radius: 5%;
  font-size: 1.4rem;
  color: white;
  font-weight: 300;
  background: transparent;
  transition: background 0.1s, color 0.1s;

  &:disabled {
    background: white;
    color: black;
  }

  /* Enable hover only for desktop */
  @media (min-width: 1100px) {
    cursor: pointer;
    &:hover {
      background: white;
      color: black;
    }
  }
`;

export const Title = styled.h1`
  position: fixed;
  top: 20px;
  font-weight: 300;
  font-size: 2rem;
  margin: 0;
`;

export const Table = styled.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  height: 69vh;
`;

export const TableItem = styled.div`
  margin-right: 3px;
  margin-top: auto;
  height: ${props => (props.height ? props.height : "50%")};
  width: ${props => (props.width ? props.width : "10%")};
  background: linear-gradient(to bottom, rgb(140, 107, 255), rgb(13, 98, 218));
  ${props => props.selected && "background: rgb(156, 10, 0);"}
  @media(max-width: 900px) {
    margin-right: 2px;
  }
`;
