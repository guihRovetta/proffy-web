import styled from 'styled-components';

export const InputContactContainer = styled.div`
  display: grid;
  grid-template-columns: 65% 35%;
  margin-bottom: 2.4rem;

  @media (max-width: 700px) {
    grid-template-columns: none;
    grid-template-rows: repeat(2, 1fr);
    grid-row-gap: 2.4rem;
  }

  @media (min-width: 700px) {
    .select-block {
      &:first-child {
        margin-right: 3.2rem;
      }
    }
  }

  .input-block {
    @media (min-width: 700px) {
      &:first-child {
        margin-right: 3.2rem;
      }
    }

    &:last-child {
      margin-top: 0;
    }
  }
`;
