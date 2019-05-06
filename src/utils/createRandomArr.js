const createRandomArr = size => {
  let arr = [];
  for (let i = 1; i <= size; i++) {
    arr.push({ value: i, selected: false, emitSound: false });
  }
  for (let i = 0; i < size; i++) {
    let randomIndex = Math.floor(Math.random() * size);
    let temp;
    temp = arr[i];
    arr[i] = arr[randomIndex];
    arr[randomIndex] = temp;
  }
  return arr;
};

export default createRandomArr;
