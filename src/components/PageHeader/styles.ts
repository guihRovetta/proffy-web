import styled from 'styled-components';

interface HeaderProps {
  heightSize?: string;
}

export const Header = styled.header<HeaderProps>`
  display: flex;
  flex-direction: column;
  background-color: var(--color-primary);

  @media (min-width: 700px) {
    height: ${(props) => props.heightSize || '416px'};
  }
`;

export const TopBarContainer = styled.div`
  background-color: var(--color-primary-darker);
`;

export const TopBarWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-text-in-primary);
  padding: 1.6rem 0;

  @media (min-width: 700px) {
    max-width: 1100px;
  }

  a {
    height: 3.2rem;
    transition: opacity 0.2s;
    display: flex;
    align-items: center;

    &:hover {
      opacity: 0.6;
    }

    &:last-child {
      img {
        &:last-child {
          height: 1.6rem;
        }
      }
    }
  }
`;

export const Content = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;
  margin: 3.2rem auto;

  @media (min-width: 700px) {
    flex: 1;
    max-width: 740px;
    margin: 0 auto;
    padding-top: 6.4rem;
    padding-bottom: 4.8rem;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  > p {
    max-width: 30rem;
    font-size: 1.6rem;
    line-height: 2.6rem;
    color: var(--color-text-in-primary);
    margin-top: 2.4rem;
  }
`;

export const TitleContainer = styled.div`
  strong {
    font: 700 3.6rem Archivo;
    line-height: 4.2rem;
    color: var(--color-title-in-primary);

    @media (min-width: 700px) {
      max-width: 376px;
    }
  }

  display: flex;
  justify-content: space-between;

  div {
    &:last-child {
      display: flex;

      img {
        width: 3.2rem;
        height: 3.2rem;
      }

      p {
        font-size: 1.2rem;
        margin-left: 1.6rem;
        color: var(--color-text-in-primary);
        max-width: 105px;
      }
    }
  }
`;
