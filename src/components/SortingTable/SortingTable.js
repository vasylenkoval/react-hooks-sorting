import React from "react";

import {
  Table,
  TableItem,
  Title,
  TableWrapper,
  Button
} from "./SortingTable-styled";

const SortingTable = ({ start, currentAlgorithm, size, array }) => {
  const renderArray = () =>
    array.map(({ value, selected }, index, arr) => {
      return (
        <TableItem
          key={value}
          selected={selected}
          height={`${(value / arr.length) * 90}%`}
          width={`${100 / arr.length}%`}
        />
      );
    });

  return (
    <TableWrapper>
      <Title>{currentAlgorithm}</Title>
      <Table>{renderArray()}</Table>
      <Button onClick={start}>Start</Button>
    </TableWrapper>
  );
};

export default SortingTable;
