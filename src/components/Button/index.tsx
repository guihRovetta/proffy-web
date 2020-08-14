import React, { ButtonHTMLAttributes } from 'react';

import { CustomButton } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <CustomButton {...rest}>{children}</CustomButton>;
};

export default Button;
