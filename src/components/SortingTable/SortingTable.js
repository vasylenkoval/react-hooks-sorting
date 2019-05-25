import React, { useContext } from "react";
import { Table, Bar, Title, AlgorithmName } from "./SortingTable.styled";
import { Flipper, Flipped } from "react-flip-toolkit";
import { playSound } from "utils/sound/sound";
import SortingContext from "context/Sorting";
import ThemeContext from "context/Theme";

const SortingTable = () => {
  const { array, config } = useContext(SortingContext);
  const { colors } = useContext(ThemeContext);

  const renderArray = () =>
    array.currentArray.map(
      ({ value, selected, emitSound, transition }, index) => {
        if (emitSound && !config.isMuted) {
          playSound();
        }
        return (
          <Flipped key={index} flipId={value}>
            <Bar
              key={index}
              selected={selected}
              height={`${(value / array.currentArray.length) * 90}%`}
              width={`${100 / array.currentArray.length}%`}
              barTopColor={colors.barTop}
              barBottomColor={colors.barBottom}
              barBorderColor={colors.barBorder}
              selectedTopColor={colors.selectedTop}
              selectedBottomColor={colors.selectedBottom}
              transition={transition}
            />
          </Flipped>
        );
      }
    );

  return (
    <Flipper spring={"stiff"} flipKey={JSON.stringify(array.currentArray)}>
      <Table>
        <Title>Sorting algorithm:</Title>
        <AlgorithmName>{config.algorithm}</AlgorithmName>
        {renderArray()}
      </Table>
    </Flipper>
  );
};

export default SortingTable;
