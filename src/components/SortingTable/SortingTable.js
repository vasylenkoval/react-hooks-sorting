import React from "react";

import {
  Table,
  TableItem,
  Title,
  TableWrapper,
  Button
} from "./SortingTable-styled";

import { playSound } from "../../utils/sound";

const SortingTable = ({
  start,
  currentAlgorithm,
  array,
  isSorting,
  isSorted,
  randomize
}) => {
  const renderArray = () =>
    array.map(({ value, selected, emitSound }, _, arr) => {
      if (emitSound) {
        playSound();
      }
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
      <Button disabled={isSorting} onClick={isSorted ? randomize : start}>
        {isSorted ? "Randomize" : "Start"}
      </Button>
    </TableWrapper>
  );
};

export default SortingTable;
