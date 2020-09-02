import styled from 'styled-components';

export const ScheduleContainer = styled.div``;

export const ScheduleWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1.6rem;
  grid-template-areas:
    'week week'
    'from to';

  @media (max-width: 700px) {
    .week-day-input {
      grid-area: week;
    }

    .input-block {
      &:last-child {
        margin-top: 0;
        margin-left: 1.6rem;
      }
    }
  }

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: none;
    column-gap: 1.6rem;

    .input-block {
      margin-top: 0 !important;
    }
  }
`;

export const ScheduleButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.6rem;
  margin-bottom: 2.4rem;

  div {
    border-bottom: 1px solid var(--color-line-in-white);
    flex: 1;
  }

  button {
    outline: 0;
    border: 0;
    cursor: pointer;
    background-color: transparent;
    color: var(--color-danger);
    padding: 0 2.4rem;
    font: 700 1.4rem Archivo;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`;
