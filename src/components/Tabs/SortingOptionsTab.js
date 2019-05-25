import React, { useContext, useState, useEffect } from "react";
import { Select, Label, Button } from "styles/reusableStyles";
import SortingContext from "context/Sorting";

const SortingOptionsTab = ({ closeTab }) => {
  const { config, array, actions } = useContext(SortingContext);

  //Internal state with default values from context
  const [algorithm, setAlgorithm] = useState(config.algorithm);
  const [interval, setSortingInterval] = useState(config.interval);
  const [arraySize, setArraySize] = useState(config.arraySize);
  const [isModified, setIsModified] = useState(false);

  //Effect to check if the values were modified
  useEffect(() => {
    if (
      algorithm !== config.algorithm ||
      interval !== config.interval ||
      arraySize !== config.arraySize
    ) {
      setIsModified(true);
    }
  }, [
    algorithm,
    interval,
    arraySize,
    config.algorithm,
    config.interval,
    config.arraySize
  ]);

  const handleSubmit = e => {
    e.preventDefault();
    if (array.isSorting) {
      actions.stop();
      actions.shuffle();
    }

    config.setAlgorithm(algorithm);
    config.setArraySize(arraySize);
    config.setSortingInterval(interval);
    setIsModified(false);
    closeTab();
  };

  const renderAlgorithmSelect = () => (
    <Label>
      Algorithm
      <Select
        value={algorithm}
        name="algorithm"
        onChange={e => setAlgorithm(e.target.value)}
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
        value={interval}
        name="speed"
        onChange={e => setSortingInterval(e.target.value)}
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
        value={arraySize}
        name="count"
        onChange={e => setArraySize(e.target.value)}
      >
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </Select>
    </Label>
  );

  return (
    <form onSubmit={handleSubmit}>
      {renderAlgorithmSelect()}
      {renderCountSelect()}
      {renderIntervalSelect()}
      <div style={{ textAlign: "right" }}>
        {isModified && "Not Saved"}
        <Button disabled={!isModified}>Apply</Button>
      </div>
    </form>
  );
};

export default SortingOptionsTab;
