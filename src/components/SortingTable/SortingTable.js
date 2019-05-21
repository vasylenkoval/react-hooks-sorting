import React, { useContext } from "react";
import { Table, TableItem, Title, AlgorithmName } from "./SortingTable.styled";
import { Flipper, Flipped } from "react-flip-toolkit";
import { playSound } from "utils/sound/sound";
import SortingContext from "context/Sorting";

const SortingTable = () => {
  const { sorting, values } = useContext(SortingContext);

  const renderArray = () =>
    sorting.currentArray.map(({ value, selected, emitSound }, index) => {
      if (emitSound && !values.isMuted) {
        playSound();
      }
      return (
        <Flipped key={index} flipId={value}>
          <TableItem
            key={index}
            selected={selected}
            height={`${(value / sorting.currentArray.length) * 90}%`}
            width={`${100 / sorting.currentArray.length}%`}
          />
        </Flipped>
      );
    });

  return (
    <Flipper spring={"stiff"} flipKey={JSON.stringify(sorting.currentArray)}>
      <Table>
        <Title>Sorting algorithm:</Title>
        <AlgorithmName>{values.algorithm}</AlgorithmName>
        {renderArray()}
      </Table>
    </Flipper>
  );
};

export default SortingTable;
