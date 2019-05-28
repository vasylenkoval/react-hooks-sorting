const insertionSort = array => {
  let arr = [...array];
  let len = arr.length;
  let sortingHistory = [[...arr]];

  for (let i = 1; i < len; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j].value > key.value) {
      arr[j + 1] = {
        ...arr[j],
        selected: true
      };
      sortingHistory.push([...arr]);
      arr[j + 1] = { ...arr[j], selected: false };
      j = j - 1;
    }

    arr[j + 1] = key;

    //emit sound and record when in the right place
    arr[j + 1] = { ...arr[j + 1], emitSound: true };
    sortingHistory.push([...arr]);
    arr[j + 1] = { ...arr[j + 1], emitSound: false };
  }
  return sortingHistory;
};

export default insertionSort;
