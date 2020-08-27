import React, { FormEvent, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import * as yup from 'yup';

import LogoContainer from '../../components/LogoContainer';
import FormField from '../../components/FormField';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import AnimatedLottieComponent from '../../components/AnimatedLottieComponent';

import api from '../../services/api';

import backIcon from '../../assets/images/icons/back.svg';
import successIcon from '../../assets/images/icons/success-check-icon.svg';
import warningIcon from '../../assets/images/icons/warning-error.svg';

import sendingEmailAnimation from '../../assets/animations/sending-email.json';

import {
  Container,
  FormWrapper,
  FormContainer,
  Form,
  AltButton,
} from './styles';

interface ModalObjProps {
  title: string;
  message: string;
  statusIcon?: string;
  isError?: boolean;
  link?: string;
}

const Forgot: React.FC = () => {
  const history = useHistory();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalObj, setModalObj] = useState<ModalObjProps>({
    title: '',
    message: '',
    statusIcon: successIcon,
    isError: false,
    link: '',
  });

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [formValid, setFormValid] = useState(false);

  let schema = yup.object().shape({
    email: yup.string().email().trim().required(),
  });

  useEffect(() => {
    schema.isValid({ email }).then((isValid) => setFormValid(isValid));
  }, [schema, email]);

  function handleForgot(e: FormEvent) {
    e.preventDefault();
    setLoading(true);

    api
      .post('forgot', {
        email,
      })
      .then((success) => {
        setLoading(false);

        const {
          data: { message },
        } = success;

        handleResponse(
          'Redefinição realizada!',
          'Clique no link (Ver email) para acessar sua senha provisória',
          successIcon,
          false,
          message
        );
      })
      .catch((error) => {
        setLoading(false);

        const {
          data: { message },
        } = error.response;

        handleResponse(
          'Erro na redefinição de senha',
          message,
          warningIcon,
          true
        );
      });
  }

  function handleBackToLogin() {
    history.push('/login');
  }

  function handleResponse(
    title: string,
    message: string,
    statusIcon: string,
    isError: boolean,
    link?: string
  ) {
    setModalOpen(true);
    setModalObj({ title, message, statusIcon, isError, link });
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

              <FormField
                name="email"
                label="E-mail"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></FormField>

              <Button disabled={!formValid}>
                {!loading ? (
                  'Enviar'
                ) : (
                  <>
                    Enviando...
                    <AnimatedLottieComponent
                      animationData={sendingEmailAnimation}
                      height={56}
                      width={56}
                    />
                  </>
                )}
              </Button>
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
            <>
              <Button onClick={handleBackToLogin}>Voltar ao login</Button>
              <AltButton
                href={modalObj.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver email
              </AltButton>
            </>
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

export default Forgot;
