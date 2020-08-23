import styled from 'styled-components';

import drowpdownIcon from '../../assets/images/icons/dropdown.svg';

export const Container = styled.div`
  position: relative;

  .select-block + .select-block {
    margin-top: 1.4rem;
  }

  label {
    font-size: 1.4rem;
  }

  select {
    width: 100%;
    height: 5.6rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: var(--color-input-background);
    color: var(--color-text-input);
    border: 1px solid var(--color-line-in-white);
    outline: 0;
    padding: 0 1.6rem;
    font: 1.6rem Archivo;
    appearance: none;
    background-image: url(${drowpdownIcon});
    background-repeat: no-repeat, repeat;
    background-position: right 0.7em top 50%, 0 0;
    background-size: 0.65em auto, 100%;

    option:not(:first-of-type) {
      color: var(--color-text-base);
    }
  }

  &:focus-within::after {
    width: calc(100% - 3.2rem);
    height: 2px;
    content: '';
    background: var(--color-primary-light);
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0;
  }
`;
