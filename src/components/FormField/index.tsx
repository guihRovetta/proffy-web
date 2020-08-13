import React, { InputHTMLAttributes } from 'react';

import { Container, Label, Input } from './styles';

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  borderRadius?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  borderRadius,
  ...rest
}) => {
  return (
    <Container>
      <Input
        type="text"
        placeholder=" "
        id={name}
        borderRadius={borderRadius}
        {...rest}
      />
      <Label htmlFor={name}>{label}</Label>
    </Container>
  );
};

export default FormField;
