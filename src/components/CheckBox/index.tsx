import React, { InputHTMLAttributes } from 'react';

import { Container, Label, Input } from './styles';

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({ label, name, ...rest }) => {
  return (
    <Container>
      <Input type="checkbox" placeholder=" " id={name} {...rest} />
      <Label htmlFor={name}>{label}</Label>
    </Container>
  );
};

export default CheckBox;
