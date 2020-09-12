import { useState } from 'react';

export const useCounter = (currentValue: number) => {
  const [count, setCount] = useState(currentValue);

  const increment = () => setCount(count + 1);

  const decrement = () => count > 1 && setCount(count - 1);

  return { count, increment, decrement };
};
