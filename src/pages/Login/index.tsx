import React from 'react';
import { Link } from 'react-router-dom';

import FormField from '../../components/FormField';
import FormFieldPassword from '../../components/FormFieldPassword';
import CheckBox from '../../components/CheckBox';
import Button from '../../components/Button';

import logoImg from '../../assets/images/logo.svg';

import {
  Container,
  LogoWrapper,
  BackgroundWrapper,
  LogoContent,
  FormWrapper,
  FormContent,
  PasswordContainer,
} from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <LogoWrapper>
        <BackgroundWrapper>
          <LogoContent>
            <img src={logoImg} alt="Proffy" />
            <h2>Sua plataforma de estudos online.</h2>
          </LogoContent>
        </BackgroundWrapper>
      </LogoWrapper>

      <FormWrapper>
        <FormContent>
          <h1>Fazer login</h1>
          <FormField name="email" label="E-mail" borderRadius="top"></FormField>
          <FormFieldPassword
            name="password"
            label="Senha"
            borderRadius="bottom"
          ></FormFieldPassword>
          <PasswordContainer>
            <CheckBox name="remember" label="Lembrar-me"></CheckBox>
            <Link to="/forget">Esqueci minha senha</Link>
          </PasswordContainer>
          <Button>Entrar</Button>
        </FormContent>
      </FormWrapper>
    </Container>
  );
};

export default Login;
