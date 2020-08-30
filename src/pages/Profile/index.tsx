import React, { useState, FormEvent, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import * as yup from 'yup';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import TextMaskedInput from '../../components/TextMaskedInput';
import Button from '../../components/Button';
import Modal from '../../components/Modal';

import defaultProfileImg from '../../assets/images/default-profile.jpeg';

import warningIcon from '../../assets/images/icons/warning.svg';
import cameraIcon from '../../assets/images/icons/camera.svg';
import successIcon from '../../assets/images/icons/success-check-icon.svg';

import api from '../../services/api';

import { currencyMask, phoneMask } from '../../utils/Masks';
import convertMinutesToHour from '../../utils/ConvertMinutesToHours';

import {
  Container,
  ScheduleContainer,
  ScheduleItem,
  ScheduleButtonContainer,
  ProfileCover,
  ProfileImageContainer,
  ProfileImage,
  CameraIconImage,
  InputNameContainer,
  InputContactContainer,
} from './styles';

interface ScheduleItemResponse {
  week_day: number;
  from: any;
  to: any;
}

function Profile() {
  const [avatar, setAvatar] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');
  const [scheduleItems, setScheduleItems] = useState([
    { id: 0, week_day: 0, from: '', to: '' },
  ]);

  const [formValid, setFormValid] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalObj, setModalObj] = useState({
    title: '',
    message: '',
    statusIcon: successIcon,
    isError: false,
  });

  let schema = yup.object().shape({
    avatar: yup.string().trim().required(),
    name: yup.string().required(),
    lastname: yup.string().required(),
    email: yup.string().email().trim().required(),
    whatsapp: yup.string().trim().required(),
    bio: yup.string().max(300).required(),
    subject: yup.string().required(),
    cost: yup.string().required(),
    scheduleItems: yup.array().of(
      yup.object().shape({
        week_day: yup.number().required(),
        from: yup.string().required(),
        to: yup.string().required(),
      })
    ),
  });

  const history = useHistory();

  useEffect(() => {
    getProfileData();
  }, []);

  useEffect(() => {
    debugger;
    schema
      .isValid({
        avatar,
        name,
        lastname,
        email,
        whatsapp,
        bio,
        subject,
        cost,
        scheduleItems,
      })
      .then((isValid) => setFormValid(isValid));
  }, [
    schema,
    avatar,
    name,
    lastname,
    email,
    whatsapp,
    bio,
    subject,
    cost,
    scheduleItems,
  ]);

  function setScheduleItemValue(
    position: Number,
    field: string,
    value: string
  ) {
    debugger;
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItems);
  }

  function handleAddNewScheduleItem() {
    const scheduleItem = {
      id: 0,
      week_day: 5,
      from: '',
      to: '',
    };

    setScheduleItems([...scheduleItems, scheduleItem]);
  }

  function handleRemoveScheduleItem(e: FormEvent, id: number) {
    e.preventDefault();

    const updatedScheduleItems = scheduleItems.filter((item) => {
      return item.id !== id;
    });

    setScheduleItems(updatedScheduleItems);
  }

  function handleUpdateUserClass(e: FormEvent) {
    e.preventDefault();

    api
      .put('classes', {
        name,
        lastname,
        email,
        avatar: 'https://github.com/guihRovetta.png',
        whatsapp,
        bio,
        subject,
        cost: Number(cost),
        schedule: scheduleItems,
      })
      .then(() => {
        handleResponse(
          'Informações atualizadas!',
          'Acesse a listagem de proffys disponíveis ou comece a dar aula.',
          successIcon,
          false
        );
      })
      .catch((error) => {
        const {
          data: { message },
        } = error.response;

        handleResponse(
          'Erro ao atualizar as informações',
          message,
          warningIcon,
          true
        );
      });
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

  function handleBackToHome() {
    history.push('/');
  }

  function getProfileData() {
    api.get('users').then((response) => {
      const {
        user: { avatar, name, lastname, email, whatsapp, bio },
      } = response.data;

      setAvatar(avatar);
      setName(name);
      setLastname(lastname);
      setEmail(email);
      setWhatsapp(whatsapp);
      setBio(bio);

      const {
        class: { subject, cost, id },
      } = response.data;

      setSubject(subject);
      setCost(cost);
      getScheduleClassData(id);
    });
  }

  function getScheduleClassData(id: number) {
    api.get(`classes/${id}`).then((response) => {
      const scheduleItems = response.data;

      scheduleItems.map((item: ScheduleItemResponse) => {
        item.from = convertMinutesToHour(item.from);
        item.to = convertMinutesToHour(item.to);
      });

      setScheduleItems(scheduleItems);
    });
  }

  return (
    <>
      {!modalOpen && (
        <Container>
          <PageHeader pageTitle="Meu perfil" headerHeightSize="535px">
            <ProfileCover>
              <ProfileImageContainer>
                <ProfileImage
                  src={avatar ? avatar : defaultProfileImg}
                  alt={`${name} ${lastname}`}
                />
                <CameraIconImage>
                  <img src={cameraIcon} alt="Camera" />
                </CameraIconImage>
              </ProfileImageContainer>

              <strong>Guilherme Rovetta</strong>
              <span>Geografia</span>
            </ProfileCover>
          </PageHeader>

          <main>
            <form onSubmit={handleUpdateUserClass}>
              <fieldset>
                <legend>Seus dados</legend>

                <InputNameContainer>
                  <Input
                    name="name"
                    label="Nome"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />

                  <Input
                    name="lastname"
                    label="Sobrenome"
                    value={lastname}
                    onChange={(e) => {
                      setLastname(e.target.value);
                    }}
                  />
                </InputNameContainer>

                <InputContactContainer>
                  <Input
                    name="avatar"
                    label="Email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />

                  <TextMaskedInput
                    name="whatsapp"
                    label="Whatsapp"
                    value={whatsapp}
                    onChange={(e) => {
                      setWhatsapp(e.target.value);
                    }}
                    mask={phoneMask}
                  />
                </InputContactContainer>

                <Textarea
                  name="bio"
                  label="Biografia (máximo de 300 caracteres)"
                  value={bio}
                  onChange={(e) => {
                    setBio(e.target.value);
                  }}
                />
              </fieldset>

              <fieldset>
                <legend>Sobre a aula</legend>

                <InputContactContainer>
                  <Select
                    name="subject"
                    label="Matéria"
                    value={subject}
                    onChange={(e) => {
                      setSubject(e.target.value);
                    }}
                    options={[
                      { value: 'Artes', label: 'Artes' },
                      { value: 'Biologia', label: 'Biologia' },
                      { value: 'Ciências', label: 'Ciências' },
                      { value: 'Educação Física', label: 'Educação Física' },
                      { value: 'Física', label: 'Física' },
                      { value: 'Geografia', label: 'Geografia' },
                      { value: 'História', label: 'História' },
                      { value: 'Matemática', label: 'Matemática' },
                      { value: 'Português', label: 'Português' },
                      { value: 'Química', label: 'Química' },
                    ]}
                  />

                  <TextMaskedInput
                    name="cost"
                    label="Custo da sua hora por aula"
                    value={cost}
                    onChange={(e) => {
                      setCost(e.target.value);
                    }}
                    mask={currencyMask}
                  />
                </InputContactContainer>
              </fieldset>

              <fieldset>
                <legend>
                  Horários disponíveis
                  <button type="button" onClick={handleAddNewScheduleItem}>
                    + Novo
                  </button>
                </legend>

                {scheduleItems.map((scheduleItem, index) => {
                  return (
                    <ScheduleContainer key={index}>
                      <ScheduleItem>
                        <Select
                          name="week_day"
                          label="Dia da semana"
                          value={scheduleItem.week_day}
                          onChange={(e) =>
                            setScheduleItemValue(
                              index,
                              'week_day',
                              e.target.value
                            )
                          }
                          options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-feira' },
                            { value: '2', label: 'Terça-feira' },
                            { value: '3', label: 'Quarta-feira' },
                            { value: '4', label: 'Quinta-feira' },
                            { value: '5', label: 'Sexta-feira' },
                            { value: '6', label: 'Sábado' },
                          ]}
                          customClass="week-day-input"
                        />

                        <Input
                          name="from"
                          label="Das"
                          type="time"
                          value={scheduleItem.from}
                          onChange={(e) =>
                            setScheduleItemValue(index, 'from', e.target.value)
                          }
                        />

                        <Input
                          name="to"
                          label="Até"
                          type="time"
                          value={scheduleItem.to}
                          onChange={(e) =>
                            setScheduleItemValue(index, 'to', e.target.value)
                          }
                        />
                      </ScheduleItem>

                      <ScheduleButtonContainer>
                        <div />
                        <button
                          onClick={(e) =>
                            handleRemoveScheduleItem(e, scheduleItem.id)
                          }
                        >
                          Excluir horário
                        </button>
                        <div />
                      </ScheduleButtonContainer>
                    </ScheduleContainer>
                  );
                })}
              </fieldset>

              <footer>
                <p>
                  <img src={warningIcon} alt="Aviso importante" />
                  Importante! <br />
                  Preencha todos os dados corretamente
                </p>
                <Button type="submit" disabled={!formValid}>
                  Atualizar cadastro
                </Button>
              </footer>
            </form>
          </main>
        </Container>
      )}

      {modalOpen && (
        <Modal
          title={modalObj.title}
          message={modalObj.message}
          statusIcon={modalObj.statusIcon}
        >
          {!modalObj.isError ? (
            <Button onClick={handleBackToHome}>Ir para home</Button>
          ) : (
            <Button onClick={() => setModalOpen(false)}>
              Tentar novamente
            </Button>
          )}
        </Modal>
      )}
    </>
  );
}

export default Profile;
