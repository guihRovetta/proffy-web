import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import logoffIcon from '../../assets/images/icons/quit.svg';

import {
  Container,
  TopContent,
  TopWrapper,
  ProfileContainer,
  LogoContainer,
  BottomContent,
  BottomWrapper,
  InformationContainer,
  ButtonsContainer,
  TotalConnections,
  TotalConnectionsMobile,
} from './styles';

function Landing() {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then((response) => {
      const { total } = response.data;

      setTotalConnections(total);
    });
  }, []);

  return (
    <Container>
      <TopContent>
        <TopWrapper>
          <ProfileContainer>
            <div>
              <img
                src="https://avatars2.githubusercontent.com/u/9082472?s=460&u=766fef82d4a85fb1555aad72ebfb827a4f1f3b22&v=4"
                alt="Meu Perfil"
              />
              <span>Guilherme Rovetta</span>
            </div>

            <button>
              <img src={logoffIcon} alt="Sair" />
            </button>
          </ProfileContainer>

          <LogoContainer>
            <img src={logoImg} alt="Proffy" />
            <h2>Sua plataforma de estudos online.</h2>
          </LogoContainer>

          <img
            src={landingImg}
            alt="Plataforma de estudos"
            className="hero-image"
          />
        </TopWrapper>
      </TopContent>

      <BottomContent>
        <BottomWrapper>
          <InformationContainer>
            <p>
              Seja bem-vindo. <br /> <strong>O que deseja fazer?</strong>
            </p>
            <TotalConnections>
              Total de {totalConnections} conexões já realizadas
              <img src={purpleHeartIcon} alt="Coração roxo"></img>
            </TotalConnections>
          </InformationContainer>

          <ButtonsContainer>
            <Link to="/study" className="study">
              <img src={studyIcon} alt="Estudar" />
              Estudar
            </Link>

            <Link to="/give-classes" className="give-classes">
              <img src={giveClassesIcon} alt="Dar aulas" />
              Dar aulas
            </Link>
          </ButtonsContainer>

          <TotalConnectionsMobile>
            Total de {totalConnections} conexões já realizadas
            <img src={purpleHeartIcon} alt="Coração roxo"></img>
          </TotalConnectionsMobile>
        </BottomWrapper>
      </BottomContent>
    </Container>
  );
}

export default Landing;
