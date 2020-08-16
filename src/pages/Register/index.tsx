import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';

import LogoContainer from '../../components/LogoContainer';
import FormField from '../../components/FormField';
import FormFieldPassword from '../../components/FormFieldPassword';
import Button from '../../components/Button';

import backIcon from '../../assets/images/icons/back.svg';

import { Container, FormWrapper, FormContainer, Form } from './styles';

const Register: React.FC = () => {
  function handleRegister(e: FormEvent) {
    e.preventDefault();

    console.log('Logando....');
  }

  return (
    <Container>
      <FormWrapper>
        <FormContainer>
          <Link to="/login">
            <img src={backIcon} alt="Voltar" />
          </Link>
          <Form onSubmit={handleRegister}>
            <h1>Cadastro</h1>
            <p>Preencha os dados abaixo para começar</p>
            <FormField name="name" label="Nome" borderRadius="top"></FormField>
            <FormField name="lastname" label="Sobrenome"></FormField>
            <FormField name="email" label="E-mail"></FormField>
            <FormFieldPassword
              name="password"
              label="Senha"
              borderRadius="bottom"
            ></FormFieldPassword>
            <Button>Concluir cadastro</Button>
          </Form>
        </FormContainer>
      </FormWrapper>

      <LogoContainer />
    </Container>
  );
};

export default Register;
