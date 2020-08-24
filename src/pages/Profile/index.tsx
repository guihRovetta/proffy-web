import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import TextMaskedInput from '../../components/TextMaskedInput';

import warningIcon from '../../assets/images/icons/warning.svg';
import cameraIcon from '../../assets/images/icons/camera.svg';

import api from '../../services/api';

import { currencyMask, phoneMask } from '../../utils/Masks';

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

function Profile() {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' },
  ]);

  const history = useHistory();

  function handleAddNewScheduleItem() {
    const scheduleItem = {
      week_day: 5,
      from: '',
      to: '',
    };

    setScheduleItems([...scheduleItems, scheduleItem]);
  }

  function setScheduleItemValue(
    position: Number,
    field: string,
    value: string
  ) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItems);
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    api
      .post('classes', {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost: Number(cost),
        schedule: scheduleItems,
      })
      .then(() => {
        alert('Cadastro realizado com sucesso!');

        history.push('/');
      })
      .catch(() => {
        alert('Erro no cadastro!');
      });
  }

  return (
    <Container>
      <PageHeader pageTitle="Meu perfil" headerHeightSize="535px">
        <ProfileCover>
          <ProfileImageContainer>
            <ProfileImage src="https://github.com/guihRovetta.png" />
            <CameraIconImage>
              <img src={cameraIcon} alt="Camera" />
            </CameraIconImage>
          </ProfileImageContainer>

          <strong>Guilherme Rovetta</strong>
          <span>Geografia</span>
        </ProfileCover>
      </PageHeader>

      <main>
        <form onSubmit={handleCreateClass}>
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
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </InputNameContainer>

            <InputContactContainer>
              <Input
                name="avatar"
                label="Email"
                value={avatar}
                onChange={(e) => {
                  setAvatar(e.target.value);
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
                        setScheduleItemValue(index, 'week_day', e.target.value)
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
                    <button>Excluir horário</button>
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
            <button type="submit">Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </Container>
  );
}

export default Profile;
