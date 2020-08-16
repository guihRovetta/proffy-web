import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;

  @media (max-width: 950px) {
    flex-direction: column;

    > div:last-of-type {
      display: none;
    }
  }
`;

export const FormWrapper = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 950px) {
    padding: 3.2rem 0;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 35.2rem;

  a {
    position: absolute;
    top: 16px;
  }
`;

export const Form = styled.form`
  h1 {
    color: var(--color-text-title);
    font-size: 3.6rem;
    margin-bottom: 2.1rem;
  }

  p {
    margin-bottom: 4rem;
    max-width: 21.3rem;
  }

  button {
    margin-top: 4rem;
  }

  @media (max-width: 950px) {
    padding-top: 9.8rem;
  }
`;
