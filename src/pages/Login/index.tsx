import React, { FormEvent, useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import * as yup from 'yup';

import { Context } from '../../context/AuthContext';

import LogoContainer from '../../components/LogoContainer';
import FormField from '../../components/FormField';
import FormFieldPassword from '../../components/FormFieldPassword';
import CheckBox from '../../components/CheckBox';
import Button from '../../components/Button';

import heartIcon from '../../assets/images/icons/purple-heart.svg';

import {
  Container,
  FormWrapper,
  FormContainer,
  Form,
  PasswordContainer,
  ErrorMessage,
  FooterWrapper,
} from './styles';

const Login: React.FC = () => {
  const { handleLogin, errorMessage } = useContext(Context);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formValid, setFormValid] = useState(false);

  let schema = yup.object().shape({
    email: yup.string().email().trim().required(),
    password: yup.string().trim().required(),
  });

  useEffect(() => {
    schema
      .isValid({ email, password })
      .then((isValid) => setFormValid(isValid));
  }, [schema, email, password]);

  async function handleClickLogin(e: FormEvent) {
    e.preventDefault();

    handleLogin(email, password);
  }

  return (
    <Container>
      <LogoContainer />

      <FormWrapper>
        <FormContainer>
          <Form onSubmit={handleClickLogin}>
            <h1>Fazer login</h1>
            <FormField
              name="email"
              label="E-mail"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              borderRadius="top"
            ></FormField>
            <FormFieldPassword
              name="password"
              label="Senha"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              borderRadius="bottom"
            ></FormFieldPassword>
            <PasswordContainer>
              <CheckBox name="remember" label="Lembrar-me"></CheckBox>
              <Link to="/forgot">Esqueci minha senha</Link>
            </PasswordContainer>
            <Button disabled={!formValid}>Entrar</Button>
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
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
