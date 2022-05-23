import React from "react";
export const useCounter = (init: number) => {
  const [value, usecounter1] = React.useState(init);

  const increment = (x: number) => {
    usecounter1(value + x);
  };

  const decrement = (x: number) => {
    usecounter1(value - x);
  };

  const set = (x: number) => {
    usecounter1(x);
  };

  return { value, increment, decrement, set };
};