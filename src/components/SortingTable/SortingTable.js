import React, { useContext } from "react";
import { Table, TableItem, Title, AlgorithmName } from "./SortingTable.styled";
import { playSound } from "utils/sound/sound";
import SortingContext from "context/Sorting";

const SortingTable = () => {
  const { sorting, values } = useContext(SortingContext);

  const renderArray = () =>
    sorting.currentArray.map(({ value, selected, emitSound }, _, index) => {
      if (emitSound && !values.isMuted) {
        playSound();
      }
      return (
        <TableItem
          key={index}
          selected={selected}
          height={`${(value / sorting.currentArray.length) * 90}%`}
          width={`${100 / sorting.currentArray.length}%`}
        />
      );
    });

  return (
    <Table>
      <Title>Sorting algorithm:</Title>
      <AlgorithmName>{values.algorithm}</AlgorithmName>
      {renderArray()}
    </Table>
  );
};

export default SortingTable;
