import React, { useContext, useState } from "react";
import { Table, Bar, Title, AlgorithmName } from "./SortingTable.styled";
import { Flipper, Flipped } from "react-flip-toolkit";
import { playSound } from "utils/sound/sound";
import SortingContext from "context/Sorting";
import ThemeContext from "context/Theme";

const SortingTable = () => {
  const { array, config } = useContext(SortingContext);
  const { colors } = useContext(ThemeContext);

  // const [isAnimating, setIsAnimating] = useState(config.smoothAnimation);
  const isAnimating = config.isAnimating;

  const renderArray = () =>
    array.currentArray.map(({ value, selected, emitSound }, index) => {
      if (emitSound && !config.isMuted) {
        playSound();
      }
      return (
        <Flipped key={index} flipId={value} shouldFlip={() => isAnimating}>
          <Bar
            key={value}
            selected={selected}
            height={`${(value / array.currentArray.length) * 90}%`}
            width={`${100 / array.currentArray.length}%`}
            barTopColor={colors.barTop}
            barBottomColor={colors.barBottom}
            barBorderColor={colors.barBorder}
            selectedColor={colors.selectedBar}
          />
        </Flipped>
      );
    });

  return (
    <Flipper spring="stiff" flipKey={JSON.stringify(array.currentArray)}>
      <Table
        // onClick={() => setIsAnimating(!isAnimating)}
        backgroundColor={colors.background}
      >
        <Title>Sorting algorithm:</Title>
        <AlgorithmName>{config.algorithm}</AlgorithmName>
        {renderArray()}
      </Table>
    </Flipper>
  );
};

export default SortingTable;
