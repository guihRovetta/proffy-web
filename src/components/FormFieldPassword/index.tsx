import React, { InputHTMLAttributes, useState } from 'react';

import eyeOpen from '../../assets/images/icons/eye-open.svg';
import eyeClosed from '../../assets/images/icons/eye-closed.svg';

import { Container, Label, Input, EyeButton } from './styles';

interface FormFieldPasswordProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  borderRadius?: string;
}

const FormFieldPassword: React.FC<FormFieldPasswordProps> = ({
  label,
  name,
  borderRadius,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  function handleTogglePassword() {
    setShowPassword(showPassword ? false : true);
  }

  return (
    <Container>
      <Input
        type={showPassword ? 'text' : 'password'}
        placeholder=" "
        id={name}
        borderRadius={borderRadius}
        {...rest}
      />
      <Label htmlFor={name}>{label}</Label>
      <EyeButton onClick={handleTogglePassword}>
        {showPassword ? (
          <img src={eyeClosed} alt="Esconder senha" />
        ) : (
          <img src={eyeOpen} alt="Ver senha" />
        )}
      </EyeButton>
    </Container>
  );
};

export default FormFieldPassword;
