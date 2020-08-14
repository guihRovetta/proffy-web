import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';

import FormField from '../../components/FormField';
import FormFieldPassword from '../../components/FormFieldPassword';
import CheckBox from '../../components/CheckBox';
import Button from '../../components/Button';

import logoImg from '../../assets/images/logo.svg';
import heartIcon from '../../assets/images/icons/purple-heart.svg';

import {
  Container,
  LogoWrapper,
  BackgroundWrapper,
  LogoContent,
  FormWrapper,
  FormContainer,
  Form,
  PasswordContainer,
  FooterWrapper,
} from './styles';

const Login: React.FC = () => {
  function handleLogin(e: FormEvent) {
    e.preventDefault();

    console.log('Logando....');
  }

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
        <FormContainer>
          <Form onSubmit={handleLogin}>
            <h1>Fazer login</h1>
            <FormField
              name="email"
              label="E-mail"
              borderRadius="top"
            ></FormField>
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
          </Form>

          <FooterWrapper>
            <div>
              <span>Não tem conta?</span>
              <Link to="/register">Cadastre-se</Link>
            </div>
            <span>
              É de graça <img src={heartIcon} alt="Ícone de coração" />
            </span>
          </FooterWrapper>
        </FormContainer>
      </FormWrapper>
    </Container>
  );
};

export default Login;
