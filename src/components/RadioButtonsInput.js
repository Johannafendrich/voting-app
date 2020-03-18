import React from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
  display: flex;
  margin-bottom: 10px;
`;

const Input = styled.input`
  opacity: 0;
`;

const Checkmark = styled.div`
  border-radius: 50%;
  background: ${props => (props.checked ? '#1cfafa' : '#fff')};
  height: 20px;
  width: 20px;
  margin-right: 10px;
`;

const RadioInput = ({ checked, onChange, value, label }) => {
  return (
    <Label>
      <Input
        type="radio"
        name="answer"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <Checkmark checked={checked} />
      {label}
    </Label>
  );
};

export default RadioInput;
