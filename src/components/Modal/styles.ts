import styled from 'styled-components';

import backgroundImg from '../../assets/images/success-background.svg';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 12.2rem 16rem;
  z-index: 2;
  position: absolute;

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
  background-size: cover;
`;

export const LogoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    height: 12rem;
  }

  h1 {
    font: 700 5.4rem Archivo;
    color: var(--color-title-in-primary);
    padding-top: 4rem;
  }

  p {
    padding-top: 2.4rem;
    padding-bottom: 8rem;
    max-width: 47.2rem;
    text-align: center;
  }
`;
