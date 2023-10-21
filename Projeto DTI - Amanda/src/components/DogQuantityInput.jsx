import React from 'react';
import { Button, DivInput, DivRow, Label, NumberInput } from '../pages/Styles';

const DogQuantityInput = ({
  label,
  value,
  onDecrement,
  onIncrement,
  onChange,
}) => {
  return (
    <DivInput>
      <Label generic='true'>{label}:</Label>
      <DivRow>
        <Button onClick={onDecrement}>-</Button>
        <NumberInput value={value} onChange={onChange} />
        <Button onClick={onIncrement}>+</Button>
      </DivRow>
    </DivInput>
  );
};

export default DogQuantityInput;
