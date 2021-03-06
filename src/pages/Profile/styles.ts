import styled from 'styled-components';

import backgroundImg from '../../assets/images/background.svg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  @media (min-width: 700px) {
    max-width: 100vw;
  }

  main {
    form {
      background: var(--color-box-base);
      width: 100%;
      max-width: 74rem;
      border-radius: 0.8rem;
      margin: -6.4rem auto 3.2rem;
      padding-top: 6.4rem;
      overflow: hidden;

      @media (max-width: 700px) {
        margin: -1.6rem 1.6rem 2.3rem 1.6rem;
        max-width: 100%;
        width: fit-content;
      }
    }

    fieldset {
      border: 0;
      padding: 0 2.4rem;

      @media (min-width: 700px) {
        padding: 0 6.4rem;
      }

      + fieldset {
        margin-top: 6.4rem;
      }

      legend {
        font: 700 2.4rem Archivo;
        color: var(--color-text-title);
        margin-bottom: 2.4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding-bottom: 1.6rem;
        border-bottom: 1px solid var(--color-line-in-white);

        button {
          background: none;
          border: 0;
          color: var(--color-primary);
          font: 700 1.6rem Archivo;
          cursor: pointer;
          transition: color 0.2s;

          &:hover {
            color: var(--color-primary-dark);
          }
        }
      }

      .input-block + .textarea-block {
        margin-top: 2.4rem;
      }
    }

    label {
      color: var(--color-text-complement);
    }
  }
`;

export const ProfileCover = styled.div`
  background: url(${backgroundImg});
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font: 700 3.6rem Archivo;
    line-height: 2.5rem;
    color: var(--color-title-in-primary);
    margin-top: 3.2rem;
    margin-bottom: 1.6rem;
  }

  span {
    font-size: 2.4rem;
    line-height: 2.6rem;
    color: var(--color-text-in-primary);
  }
`;

export const ProfileImageContainer = styled.div`
  position: relative;
`;

export const ProfileImage = styled.img`
  max-width: 18rem;
  max-height: 18rem;
  height: 100%;
  border-radius: 50%;
`;

export const CameraIconImage = styled.button`
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  background: var(--color-secundary);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  cursor: pointer;

  outline: 0;
  border: 0;

  position: absolute;
  right: 0;
  bottom: 0;

  &:hover {
    background: var(--color-secundary-dark);
  }

  img {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

export const InputNameContainer = styled.div`
  display: flex;
  margin-bottom: 2.4rem;

  @media (max-width: 700px) {
    flex-direction: column;
  }

  @media (min-width: 700px) {
    .input-block {
      &:first-child {
        margin-right: 3.2rem;
      }

      &:last-child {
        margin-top: 0;
      }
    }
  }
`;

export const InputContactContainer = styled.div`
  display: grid;
  grid-template-columns: 65% 35%;
  margin-bottom: 2.4rem;

  @media (max-width: 700px) {
    grid-template-columns: none;
    grid-template-rows: repeat(2, 1fr);
    grid-row-gap: 2.4rem;
  }

  @media (min-width: 700px) {
    .select-block {
      &:first-child {
        margin-right: 3.2rem;
      }
    }
  }

  .input-block {
    @media (min-width: 700px) {
      &:first-child {
        margin-right: 3.2rem;
      }
    }

    &:last-child {
      margin-top: 0;
    }
  }
`;
