import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;

  @media (max-width: 950px) {
    flex-direction: column;
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
`;

export const Form = styled.form`
  h1 {
    color: var(--color-text-title);
    font-size: 3.6rem;
    margin-bottom: 4rem;
  }
`;

export const PasswordContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 2.4rem;
  padding-bottom: 4rem;

  a {
    text-decoration: none;
    color: var(--color-text-complement);
    font-size: 1.4rem;

    &:hover {
      opacity: 0.8;
    }

    &:visited {
      color: var(--color-text-complement);
    }
  }
`;

export const FooterWrapper = styled.div`
  padding-top: 12.8rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 950px) {
    padding-top: 4rem;
  }

  > div {
    display: flex;
    flex-direction: column;

    a {
      color: var(--color-primary);
      font-weight: 700;
    }
  }

  > span {
    color: var(--color-text-complement);
    font-size: 1.4rem;

    img {
      padding-left: 0.8rem;
    }
  }
`;
