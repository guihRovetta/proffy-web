import styled from 'styled-components';

import backgroundImg from '../../assets/images/background.svg';

export const LogoWrapper = styled.div`
  max-width: 76.8rem;
  height: 100%;
  width: 100%;
  padding: 7.8rem 9.2rem;

  background: var(--color-primary);

  @media (max-width: 950px) {
    max-width: 100%;
    padding: 3.6rem 3.6rem;
  }
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
  img {
    height: 10rem;

    @media (max-width: 950px) {
      height: 7.2rem;
    }
  }

  h2 {
    font-weight: 500;
    font-size: 2.4rem;
    margin-top: 0.8rem;
    max-width: 22.9rem;
  }
`;
