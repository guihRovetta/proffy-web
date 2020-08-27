import React, { FormEvent, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import * as yup from 'yup';

import LogoContainer from '../../components/LogoContainer';
import FormField from '../../components/FormField';
import FormFieldPassword from '../../components/FormFieldPassword';
import Button from '../../components/Button';
import Modal from '../../components/Modal';

import api from '../../services/api';

import backIcon from '../../assets/images/icons/back.svg';
import successIcon from '../../assets/images/icons/success-check-icon.svg';
import warningIcon from '../../assets/images/icons/warning-error.svg';

import { Container, FormWrapper, FormContainer, Form } from './styles';

const Register: React.FC = () => {
  const history = useHistory();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalObj, setModalObj] = useState({
    title: '',
    message: '',
    statusIcon: successIcon,
    isError: false,
  });

  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formValid, setFormValid] = useState(false);

  let schema = yup.object().shape({
    name: yup.string().trim().required(),
    lastname: yup.string().trim().required(),
    email: yup.string().email().trim().required(),
    password: yup.string().trim().required(),
  });

  useEffect(() => {
    schema
      .isValid({ name, lastname, email, password })
      .then((isValid) => setFormValid(isValid));
  }, [schema, name, lastname, email, password]);

  function handleRegister(e: FormEvent) {
    e.preventDefault();

    api
      .post('users', {
        name,
        lastname,
        email,
        password,
      })
      .then(() => {
        handleResponse(
          'Cadastro concluído',
          'Agora você faz parte da plataforma da Proffy.Tenha uma ótima experiência.',
          successIcon,
          false
        );
      })
      .catch((error) => {
        const {
          data: { message },
        } = error.response;

        handleResponse('Erro no cadastro', message, warningIcon, true);
      });
  }

  function handleBackToLogin() {
    history.push('/login');
  }

  function handleResponse(
    title: string,
    message: string,
    statusIcon: string,
    isError: boolean
  ) {
    setModalOpen(true);
    setModalObj({ title, message, statusIcon, isError });
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
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                borderRadius="top"
              ></FormField>

              <FormField
                name="lastname"
                label="Sobrenome"
                value={lastname}
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
              ></FormField>

              <FormField
                name="email"
                label="E-mail"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
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

              <Button disabled={!formValid}>Concluir cadastro</Button>
            </Form>
          </FormContainer>
        </FormWrapper>

        <LogoContainer />
      </Container>

      {modalOpen && (
        <Modal
          title={modalObj.title}
          message={modalObj.message}
          statusIcon={modalObj.statusIcon}
        >
          {!modalObj.isError ? (
            <Button onClick={handleBackToLogin}>Fazer login</Button>
          ) : (
            <Button onClick={() => setModalOpen(false)}>
              Tentar novamente
            </Button>
          )}
        </Modal>
      )}
    </>
  );
};

export default Register;
