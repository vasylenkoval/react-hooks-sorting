import React, { useState, useContext } from "react";
import { Select, Label } from "styles/reusableStyles";
import SortingContext from "context/Sorting";

const SortingOptionsTab = () => {
  const { values, handlers, sorting } = useContext(SortingContext);

  return (
    <>
      <Label>
        Algorithm
        <Select
          value={values.algorithm}
          onChange={e => handlers.setAlgorithm(e.target.value)}
        >
          <option value={"Bubble Sort"}>Bubble Sort</option>
          <option value={"Insertion Sort"}>Insertion Sort</option>
        </Select>
      </Label>

      <Label>
        Speed
        <Select
          value={values.interval}
          onChange={e => handlers.setInterval(e.target.value)}
        >
          <option value={300}>Slow</option>
          <option value={200}>Normal</option>
          <option value={100}>Fast</option>
          <option value={85}>Faster</option>
          <option value={50}>Laggy</option>
        </Select>
      </Label>

      <Label>
        Count
        <Select
          value={values.arraySize}
          onChange={e => {
            handlers.setArraySize(e.target.value);
            sorting.randomize();
          }}
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </Select>
      </Label>
    </>
  );
};

export default SortingOptionsTab;
