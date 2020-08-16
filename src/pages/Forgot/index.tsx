import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';

import LogoContainer from '../../components/LogoContainer';
import FormField from '../../components/FormField';
import Button from '../../components/Button';

import backIcon from '../../assets/images/icons/back.svg';

import { Container, FormWrapper, FormContainer, Form } from './styles';

const Forgot: React.FC = () => {
  function handleForgot(e: FormEvent) {
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
          <Form onSubmit={handleForgot}>
            <h1>Eita, esqueceu sua senha?</h1>
            <p>Não esquenta, vamos dar um jeito nisso</p>
            <FormField name="email" label="E-mail"></FormField>
            <Button>Enviar</Button>
          </Form>
        </FormContainer>
      </FormWrapper>

      <LogoContainer />
    </Container>
  );
};

export default Forgot;
