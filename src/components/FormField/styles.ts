import styled from 'styled-components';

interface InputProps {
  borderRadius?: string;
}

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;

  input:focus + label,
  input:not(:placeholder-shown) + label {
    font-size: 1.2rem;
    top: 1.4rem;
  }

  &:focus-within::after {
    width: 2px;
    height: calc(100% - 2.8rem);
    content: '';
    background: var(--color-primary-light);
    position: absolute;
    top: 1.2rem;
    bottom: 1.2rem;
    left: 0;
  }
`;

export const Input = styled.input<InputProps>`
  width: 35.2rem;
  height: 7.2rem;
  padding: 3.4rem 2.4rem 1.4rem 2.4rem;

  border-top-left-radius: ${({ borderRadius }) =>
    borderRadius === 'top' ? '0.8rem' : 0};
  border-top-right-radius: ${({ borderRadius }) =>
    borderRadius === 'top' ? '0.8rem' : 0};
  border-bottom-left-radius: ${({ borderRadius }) =>
    borderRadius === 'bottom' ? '0.8rem' : 0};
  border-bottom-right-radius: ${({ borderRadius }) =>
    borderRadius === 'bottom' ? '0.8rem' : 0};

  outline: 0;
  border: 1px solid var(--color-line-in-white);

  font-size: 1.6rem;
  transition: all 0.1s linear;
`;

export const Label = styled.label`
  position: absolute;
  top: 2.4rem;
  left: 2.4rem;
  transition: all 0.1s linear;

  color: var(--color-text-complement);
`;
