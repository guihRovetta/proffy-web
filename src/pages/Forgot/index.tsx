import React, { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import LogoContainer from '../../components/LogoContainer';
import FormField from '../../components/FormField';
import Button from '../../components/Button';
import Modal from '../../components/Modal';

import backIcon from '../../assets/images/icons/back.svg';

import { Container, FormWrapper, FormContainer, Form } from './styles';

const Forgot: React.FC = () => {
  const history = useHistory();
  const [modalOpen, setModalOpen] = useState(false);

  function handleForgot(e: FormEvent) {
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

      {modalOpen && (
        <Modal
          title="Redefinição enviada!"
          message="Boa, agora é só checar o e-mail que foi enviado para você redefinir
            sua senha e aproveitar os estudos."
        >
          <Button onClick={handleBackToLogin}>Voltar ao login</Button>
        </Modal>
      )}
    </>
  );
};

export default Forgot;
