import React, { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import LogoContainer from '../../components/LogoContainer';
import FormField from '../../components/FormField';
import FormFieldPassword from '../../components/FormFieldPassword';
import Button from '../../components/Button';
import Modal from '../../components/Modal';

import backIcon from '../../assets/images/icons/back.svg';

import { Container, FormWrapper, FormContainer, Form } from './styles';

const Register: React.FC = () => {
  const history = useHistory();
  const [modalOpen, setModalOpen] = useState(false);

  function handleRegister(e: FormEvent) {
    e.preventDefault();

    setModalOpen(true);
    console.log('Logando....');
  }

  function handleBackToLogin() {
    history.push('/login');
  }

  return (
    <>
      <Container>
        <FormWrapper>
          <FormContainer>
            <Link to="/login">
              <img src={backIcon} alt="Voltar" />
            </Link>
            <Form onSubmit={handleRegister}>
              <h1>Cadastro</h1>
              <p>Preencha os dados abaixo para começar</p>
              <FormField
                name="name"
                label="Nome"
                borderRadius="top"
              ></FormField>
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

      {modalOpen && (
        <Modal
          title="Cadastro concluído"
          message="Agora você faz parte da plataforma da Proffy.
          Tenha uma ótima experiência."
        >
          <Button onClick={handleBackToLogin}>Fazer login</Button>
        </Modal>
      )}
    </>
  );
};

export default Register;
