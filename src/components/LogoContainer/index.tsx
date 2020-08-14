import React from 'react';

import logoImg from '../../assets/images/logo.svg';

import { LogoWrapper, BackgroundWrapper, LogoContent } from './styles';

const LogoContainer: React.FC = () => {
  return (
    <LogoWrapper>
      <BackgroundWrapper>
        <LogoContent>
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </LogoContent>
      </BackgroundWrapper>
    </LogoWrapper>
  );
};

export default LogoContainer;
