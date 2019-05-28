import bubbleSort from "./bubbleSort";
import insertionSort from "./insertionSort";
import selectionSort from "./selectionSort";

//Map of sorting algorithms and their names
const sortingAlgorithms = {
  "Bubble Sort": bubbleSort,
  "Insertion Sort": insertionSort,
  "Selection Sort": selectionSort
};

export default sortingAlgorithms;
