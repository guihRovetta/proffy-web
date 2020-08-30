import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';
import { Context } from '../../context/AuthContext';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import defaultProfileImg from '../../assets/images/default-profile.jpeg';

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
  const history = useHistory();

  const [totalConnections, setTotalConnections] = useState(0);
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [avatar, setAvatar] = useState('');

  const { handleLogout } = useContext(Context);

  useEffect(() => {
    getConnections();
    getUserBasicData();
  }, []);

  function getConnections() {
    api.get('connections').then((response) => {
      const { total } = response.data;

      setTotalConnections(total);
    });
  }

  function getUserBasicData() {
    api.get('users').then((response) => {
      const { name, lastname, avatar } = response.data.user;

      setName(name);
      setLastname(lastname);
      setAvatar(avatar);
    });
  }

  function handleGoToProfile() {
    history.push('/profile');
  }

  return (
    <Container>
      <TopContent>
        <TopWrapper>
          <ProfileContainer>
            <div>
              <img
                src={avatar ? avatar : defaultProfileImg}
                alt={`${name} ${lastname}`}
                onClick={handleGoToProfile}
              />
              <span>{`${name} ${lastname}`}</span>
            </div>

            <button onClick={handleLogout}>
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
