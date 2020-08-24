import React, { InputHTMLAttributes } from 'react';
import MaskedInput from 'react-text-mask';

import { Container } from './styles';

interface TextMaskedInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  mask: any;
}

const TextMaskedInput: React.FC<TextMaskedInputProps> = ({
  label,
  name,
  mask,
  ...rest
}) => {
  return (
    <Container className="input-block">
      <label htmlFor={name}>{label}</label>
      <MaskedInput type="text" id={name} mask={mask} {...rest} />
    </Container>
  );
};

export default TextMaskedInput;
