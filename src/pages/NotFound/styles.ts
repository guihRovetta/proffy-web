import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1.6rem;

  h1 {
    color: var(--color-text-title);
    font-size: 3.6rem;
    margin-top: 1.6rem;
    line-height: 4.6rem;
  }

  p {
    color: var(--color-text-base);
    font-size: 2rem;
    margin: 0.8rem 0;
  }

  button {
    max-width: 17.3rem;
  }
`;
