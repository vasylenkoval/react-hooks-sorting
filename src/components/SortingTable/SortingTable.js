import React from "react";
import { Table, TableItem, Button } from "./SortingTable.styled";
import { playSound } from "../../utils/sound/sound";

const SortingTable = ({
  start,
  array,
  isSorting,
  isSorted,
  randomize,
  isMuted,
  setIsMuted
}) => {
  const renderArray = () =>
    array.map(({ value, selected, emitSound }, _, arr) => {
      if (emitSound && !isMuted) {
        playSound();
      }
      return (
        <TableItem
          // key={value}
          selected={selected}
          height={`${(value / arr.length) * 90}%`}
          width={`${100 / arr.length}%`}
        />
      );
    });

  return (
    <>
      <Table>{renderArray()}</Table>
      <Button disabled={isSorting} onClick={isSorted ? randomize : start}>
        {isSorted ? "Randomize" : "Start"}
      </Button>
    </>
  );
};

export default SortingTable;
