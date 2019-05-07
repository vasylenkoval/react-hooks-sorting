import beep from "./beep.wav";

export const playSound = () => {
  const sound = new Audio(beep);
  sound.play();
};
