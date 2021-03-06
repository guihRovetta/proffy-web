import React, { SelectHTMLAttributes } from 'react';

import { Container } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<{
    value: string;
    label: string;
  }>;
  customClass?: string;
}

const Select: React.FC<SelectProps> = ({
  label,
  name,
  options,
  customClass,
  ...rest
}) => {
  return (
    <Container className={`select-block ${customClass ? customClass : ''}`}>
      <label htmlFor={name}>{label}</label>
      <select value="" id={name} {...rest}>
        <option value="" disabled hidden>
          Selecione
        </option>

        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </Container>
  );
};

export default Select;
