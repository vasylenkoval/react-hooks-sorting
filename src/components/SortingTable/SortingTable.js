import React from "react";
import { Table, TableItem } from "./SortingTable.styled";
import { playSound } from "../../utils/sound/sound";

const SortingTable = ({ array, isMuted }) => {
  const renderArray = () =>
    array.map(({ value, selected, emitSound }, _, arr) => {
      if (emitSound && !isMuted) {
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

  return <Table>{renderArray()}</Table>;
};

export default SortingTable;
