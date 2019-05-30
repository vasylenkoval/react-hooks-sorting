/* Creates an array of random sorting objects of a passed size */
export const createRandomArr = size => {
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

/* Generates an object containing all of the icons wrapped by styled components, accepts four arguments: array of icons, array of strings for the icons names (order matters), string containing the styles to be applied and 'styled' callback function from styled-components library
 */
export const styleIcons = (icons, names, styles, styled) => {
  return icons.reduce((acc, icon, index) => {
    acc[names[index]] = styled(icon)`
      ${styles}
    `;
    return acc;
  }, {});
};

/* Tries to detect if user is using a mobile device (not 100% reliable)*/
export const checkIfMobile = () => {
  const userAgents = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  if (userAgents.test(navigator.userAgent)) return true;
  return false;
};
