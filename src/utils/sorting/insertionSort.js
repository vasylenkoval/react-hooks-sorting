const insertionSort = array => {
  let arr = [...array];
  let len = arr.length;
  let sortingHistory = [[...arr]];

  for (let i = 1; i < len; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j].value > key.value) {
      sortingHistory.push([...arr]);
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  sortingHistory.push([...arr]);
  return sortingHistory;
};

export default insertionSort;
