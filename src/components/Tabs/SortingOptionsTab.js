import React, { useContext, useState, useEffect } from "react";
import { Select, Label, Button } from "styles/reusableStyles";
import SortingContext from "context/Sorting";

const SortingOptionsTab = ({ closeTab }) => {
  const { config, array, actions } = useContext(SortingContext);

  const renderAlgorithmSelect = () => (
    <Label>
      Algorithm
      <Select
        value={config.algorithm}
        name="algorithm"
        onChange={e => config.setAlgorithm(e.target.value)}
      >
        <option value={"Bubble Sort"}>Bubble Sort</option>
        <option value={"Insertion Sort"}>Insertion Sort</option>
      </Select>
    </Label>
  );

  const renderIntervalSelect = () => (
    <Label>
      Speed
      <Select
        value={config.interval}
        name="speed"
        onChange={e => config.setSortingInterval(e.target.value)}
      >
        <option value={300}>Slow</option>
        <option value={200}>Normal</option>
        <option value={100}>Fast</option>
        <option value={85}>Faster</option>
        <option value={50}>Laggy</option>
      </Select>
    </Label>
  );

  const renderCountSelect = () => (
    <Label>
      Count
      <Select
        value={config.arraySize}
        name="count"
        onChange={e => config.setArraySize(e.target.value)}
      >
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </Select>
    </Label>
  );

  return (
    <form>
      {renderAlgorithmSelect()}
      {renderCountSelect()}
      {renderIntervalSelect()}
    </form>
  );
};

export default SortingOptionsTab;
