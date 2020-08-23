import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  color: var(--color-text-in-primary);
  background: var(--color-background);
`;

export const TopContent = styled.div`
  background: var(--color-primary);
  max-height: 53.3rem;
  display: flex;
  justify-content: center;
`;

export const TopWrapper = styled.div`
  max-width: 1100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2.4rem;
  margin-bottom: 5.6rem;

  display: grid;
  grid-template-rows: 40px 350px;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 6.3rem;
  grid-template-areas:
    'profile profile'
    'logo hero';

  @media (min-width: 700px) {
    margin-right: 1.6rem;
    margin-left: 1.6rem;
  }

  @media (max-width: 700px) {
    grid-template-rows: 40px 190px;
    grid-template-columns: 1fr;
    grid-row-gap: 40px;
    grid-template-areas:
      'profile'
      'hero';

    margin-bottom: 3.2rem;
  }

  @media (max-width: 375px) and (max-height: 640px) {
    grid-template-rows: 40px 128px;
    grid-row-gap: 16px;
  }

  .hero-image {
    grid-area: hero;
    width: 100%;

    @media (max-width: 700px) {
      width: 100%;
      height: 100%;
      padding: 0 2.4rem;
    }
  }
`;

export const ProfileContainer = styled.div`
  grid-area: profile;
  display: flex;
  justify-content: space-between;

  @media (max-width: 700px) {
    padding: 0 3.2rem;
  }

  div {
    display: flex;
    align-items: center;

    img {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      margin-right: 1.6rem;
    }

    span {
      font-size: 1.4rem;
    }
  }

  button {
    width: 4rem;
    height: 4rem;
    border-radius: 0.8rem;
    outline: 0;
    border: none;
    background: var(--color-primary-dark);
  }
`;

export const LogoContainer = styled.div`
  grid-area: logo;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 434px;

  @media (max-width: 700px) {
    display: none;
  }

  > img {
    width: 100%;
  }

  h2 {
    max-width: 298px;
    font-weight: 500;
    font-size: 2.8rem;
    color: var(--color-text-in-primary);
  }
`;

export const BottomContent = styled.div`
  display: flex;
  justify-content: center;
`;

export const BottomWrapper = styled.div`
  max-width: 1100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5.6rem;

  @media (min-width: 700px) {
    margin-right: 1.6rem;
    margin-left: 1.6rem;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    padding: 0 3.2rem;
    margin-top: 4.8rem;
  }
`;

export const InformationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (min-width: 700px) {
    margin-right: 5.3rem;
  }

  > p {
    font-size: 2rem;
    color: var(--color-text-base);
  }
`;

export const TotalConnections = styled.span`
  font-size: 1.2rem;
  color: var(--color-text-complement);
  max-width: 13.4rem;
  text-align: end;

  @media (max-width: 700px) {
    display: none;
  }

  img {
    padding-left: 0.8rem;
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 700px) {
    margin-top: 3.2rem;
    margin-bottom: 4.8rem;
  }

  a {
    max-width: 28.4rem;
    width: 100%;
    height: 10.4rem;
    border-radius: 0.8rem;
    font: 700 2rem Archivo;

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    color: var(--color-button-text);

    transition: background-color 0.2s;

    @media (max-width: 700px) {
      flex-direction: column;
      justify-content: space-between;
      padding: 3.2rem;
      align-items: flex-start;
      height: 15.8rem;
    }

    img {
      width: 4rem;
      margin-right: 2.4rem;
    }

    &:first-child {
      margin-right: 1.6rem;
    }

    &.study {
      background: var(--color-primary);
    }

    &.study:hover {
      background: var(--color-primary-light);
    }

    &.give-classes {
      background: var(--color-secundary);
    }

    &.give-classes:hover {
      background: var(--color-secundary-dark);
    }
  }
`;

export const TotalConnectionsMobile = styled.span`
  font-size: 1.2rem;
  color: var(--color-text-complement);
  max-width: 13.4rem;
  align-self: flex-start;
  margin-bottom: 3.2rem;

  @media (min-width: 700px) {
    display: none;
  }

  img {
    padding-left: 0.8rem;
  }
`;
