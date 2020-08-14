import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  position: absolute;
  opacity: 0;

  &:checked + label:before {
    background: var(--color-secundary);
  }

  &:checked + label:after {
    content: '';
    position: absolute;
    left: 8px;
    top: 12px;
    background: white;
    width: 2px;
    height: 2px;
    box-shadow: 2px 0 0 white, 4px 0 0 white, 4px -2px 0 white, 4px -4px 0 white,
      4px -6px 0 white, 4px -8px 0 white;
    transform: rotate(45deg);
  }
`;

export const Label = styled.label`
  color: var(--color-text-complement);
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  padding: 0;

  &:before {
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 0.8rem;
    outline: 0;
    border: 1px solid var(--color-line-in-white);
    background: var(--color-box-footer);

    content: '';
    margin-right: 1.4rem;
    display: inline-block;
    vertical-align: text-top;
  }
`;
