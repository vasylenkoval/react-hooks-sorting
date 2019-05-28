const selectionSort = array => {
  let arr = [...array];
  let len = arr.length;
  let sortingHistory = [[...arr]];
  let min, temp;

  for (var i = 0; i < len; i++) {
    min = i;
    for (var j = i + 1; j < len; j++) {
      arr[j] = { ...arr[j], selected: true };
      sortingHistory.push([...arr]);
      arr[j] = { ...arr[j], selected: false };
      if (arr[j].value < arr[min].value) {
        arr[min] = { ...arr[min], selected: false };
        min = j;
        arr[min] = { ...arr[min], selected: true };
      }
    }
    temp = arr[i];
    arr[i] = arr[min];
    arr[min] = { ...temp, emitSound: true };
    sortingHistory.push([...arr]);
    arr[min] = { ...temp, emitSound: false };
  }
  console.log(sortingHistory);
  return sortingHistory;
};

export default selectionSort;
