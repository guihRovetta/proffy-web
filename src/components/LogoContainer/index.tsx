import React from 'react';

import logoImg from '../../assets/images/logo.svg';

import { Container, BackgroundWrapper, LogoContent } from './styles';

const LogoContainer: React.FC = () => {
  return (
    <Container>
      <BackgroundWrapper>
        <LogoContent>
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </LogoContent>
      </BackgroundWrapper>
    </Container>
  );
};

export default LogoContainer;
