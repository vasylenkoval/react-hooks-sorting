const bubbleSort = array => {
  let arr = [...array];
  let swap, temp, i;
  let len = arr.length;
  let sortingHistory = [[...arr]];
  do {
    swap = false;
    for (i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        //save a snapshot to be rendered later
        sortingHistory.push([...arr]);
        swap = true;
      }
    }
  } while (swap);
  return sortingHistory;
};

export default bubbleSort;
