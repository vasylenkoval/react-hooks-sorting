import styled from "styled-components";

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

export const Table = styled.div`
  width: auto;
  margin: 100px 30px 30px 150px;
  display: flex;
  height: 80vh;
  background-color: #27293d;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.1);
`;

export const TableItem = styled.div`
  margin-right: 4px;
  border: 1px solid rgb(29, 119, 237);
  border-radius: 1px 1px 0 0;
  margin-top: auto;
  height: ${props => (props.height ? props.height : "50%")};
  width: ${props => (props.width ? props.width : "10%")};
  background: linear-gradient(
    to bottom,
    rgba(29, 119, 237, 0.6),
    rgba(13, 98, 218, 0)
  );
  ${props =>
    props.selected &&
    `background: linear-gradient(
    to bottom,
    rgba(156, 10, 0, 1),
    rgba(156, 10, 0, .5)
  );
  border: none;`}
  @media(max-width: 900px) {
    margin-right: 2px;
  }
`;
