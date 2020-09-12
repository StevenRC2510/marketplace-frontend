import React, { useEffect } from 'react';

import Label from '../../atoms/label/';
import { OperationsStyled } from './styles';
import { useCounter } from 'src/hooks/useCounter';

interface OperationsProps {
  currentValue: number;
  valueChanged: (value: number) => void;
}

const Operations = ({ currentValue, valueChanged }: OperationsProps) => {
  const { count, increment, decrement } = useCounter(currentValue);

  useEffect(() => {
    valueChanged(count);
  }, [count, valueChanged]);

  return (
    <OperationsStyled>
      <div className='substract' onClick={decrement}>
        -
      </div>
      <Label bold> {count} </Label>
      <div className='add' onClick={increment}>
        +
      </div>
    </OperationsStyled>
  );
};

export default Operations;
