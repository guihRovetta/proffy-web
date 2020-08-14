import styled from 'styled-components';

import backgroundImg from '../../assets/images/background.svg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
`;

export const LogoWrapper = styled.div`
  max-width: 76.8rem;
  height: 100%;
  width: 100%;
  padding: 7.8rem 9.2rem;

  background: var(--color-primary);
`;

export const BackgroundWrapper = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: var(--color-text-in-primary);
  background: url(${backgroundImg});
`;

export const LogoContent = styled.div`
  img {
    height: 10rem;
  }

  h2 {
    font-weight: 500;
    font-size: 2.4rem;
    margin-top: 0.8rem;
    max-width: 22.9rem;
  }
`;

export const FormWrapper = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
