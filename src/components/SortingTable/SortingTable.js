import React from "react";
import { Table, TableItem, Title, AlgorithmName } from "./SortingTable.styled";
import { playSound } from "utils/sound/sound";

const SortingTable = ({ array, isMuted, currentAlgorithm }) => {
  const renderArray = () =>
    array.map(({ value, selected, emitSound }) => {
      if (emitSound && !isMuted) {
        playSound();
      }
      return (
        <TableItem
          key={value}
          selected={selected}
          height={`${(value / array.length) * 90}%`}
          width={`${100 / array.length}%`}
        />
      );
    });

  return (
    <Table>
      <Title>Sorting algorithm:</Title>
      <AlgorithmName>{currentAlgorithm}</AlgorithmName>
      {renderArray()}
    </Table>
  );
};

export default SortingTable;
