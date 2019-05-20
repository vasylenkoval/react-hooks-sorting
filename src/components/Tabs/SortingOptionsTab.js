import React, { useState, useContext } from "react";
import { Select, Label } from "styles/reusableStyles";
import SortingContext from "context/Sorting";

const SortingOptionsTab = () => {
  const { values, handlers } = useContext(SortingContext);
  return (
    <>
      <Label>Algorithm</Label>
      <Select onChange={e => handlers.setAlgorithm(e.target.value)}>
        <option value={"Bubble Sort"}>Bubble Sort</option>
        <option value={"Insertion Sort"}>Insertion Sort</option>
      </Select>
    </>
  );
};

export default SortingOptionsTab;
