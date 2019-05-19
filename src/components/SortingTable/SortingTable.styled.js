import styled from "styled-components";

export const Table = styled.div`
  width: auto;
  display: flex;
  position: fixed;
  left: 11.5%;
  right: 2%;
  top: 5%;
  bottom: 5%;
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

export const Title = styled.h3`
  position: absolute;
  color: grey;
  font-size: 1.5rem;
  font-weight: 300;
  top: 15px;
  left: 30px;
`;

export const AlgorithmName = styled.h2`
  position: absolute;
  color: white;
  font-size: 2.5rem;
  font-weight: 300;
  top: 35px;
  left: 30px;
`;
