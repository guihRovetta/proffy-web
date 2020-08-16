import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;

  @media (max-width: 950px) {
    flex-direction: column-reverse;
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

  @media (min-width: 951px) {
    a {
      position: absolute;
      top: 16px;
    }
  }
`;

export const Form = styled.form`
  h1 {
    color: var(--color-text-title);
    font-size: 3.6rem;
    margin-bottom: 1.6rem;
    max-width: 26.6rem;
    line-height: 4.6rem;
  }

  p {
    margin-bottom: 4rem;
  }

  button {
    margin-top: 2.4rem;
  }

  @media (max-width: 950px) {
    padding-top: 4.9rem;
  }
`;
