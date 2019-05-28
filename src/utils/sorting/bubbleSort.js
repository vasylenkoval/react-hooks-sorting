export const bubbleSort = array => {
  let arr = [...array];
  let swap, temp, i;
  const len = arr.length;
  let sortingHistory = [[...arr]];
  do {
    swap = false;
    for (i = 0; i < len - 1; i++) {
      if (arr[i].value > arr[i + 1].value) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        //highlight current element and emit sound if in the correct spot
        arr[i + 1] = {
          ...temp,
          selected: true,
          emitSound: i + 2 === temp.value
        };
        //save a snapshot to be rendered later
        sortingHistory.push([...arr]);
        //turn highlight and sound off after taking a snapshot
        arr[i + 1] = { ...temp, selected: false, emitSound: false };
        swap = true;
      } else {
        //highlight current element
        arr[i] = { ...arr[i], selected: true };
        //save a snapshot to be rendered later
        sortingHistory.push([...arr]);
        //turn highlight and transition off after taking a snapshot
        arr[i] = { ...arr[i], selected: false, emitSound: false };
      }
    }
  } while (swap);

  //remove highlight from last snapshot
  sortingHistory[sortingHistory.length - 1].forEach(
    el => (el.selected = false)
  );

  return sortingHistory;
};

export default bubbleSort;
