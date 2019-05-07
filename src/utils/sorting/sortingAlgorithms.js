import bubbleSort from "./bubbleSort";
import insertionSort from "./insertionSort";

//Object containing different sorting algorithms attached to their names
const sortingAlgorithms = {
  "Bubble Sort": bubbleSort,
  "Insertion Sort": insertionSort
};

export default sortingAlgorithms;
