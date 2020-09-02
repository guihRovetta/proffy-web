import React, { useState, useEffect, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Textarea from '../../components/Textarea';
import TextMaskedInput from '../../components/TextMaskedInput';

import rocketIcon from '../../assets/images/icons/rocket.svg';

import api from '../../services/api';

import { phoneMask } from '../../utils/Masks';

import { Container, TopFormInputContainer } from './styles';
import FormFooterSection from '../../components/FormFooterSection';
import ScheduleItemSection from '../../components/ScheduleItemSection';
import AboutClassSection from '../../components/AboutClassSection';

function TeacherForm() {
  const [avatar, setAvatar] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems] = useState([
    { id: 0, week_day: 0, from: '', to: '' },
  ]);

  const [formValid, setFormValid] = useState(false);

  const history = useHistory();

  useEffect(() => {
    function getUserBasicData() {
      api.get('users').then((response) => {
        const { name, lastname, avatar } = response.data.user;

        setAvatar(avatar);
        setName(name);
        setLastname(lastname);
      });
    }

    getUserBasicData();
  }, []);

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
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
        pageTitle="Dar aulas"
        emoji={rocketIcon}
        emojiMessage="Prepare-se! Vai ser o máximo"
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>

            <TopFormInputContainer>
              <div>
                <img
                  src="https://github.com/guihRovetta.png"
                  alt="Imagem de perfil"
                />
                <span>{`${name} ${lastname}`}</span>
              </div>

              <TextMaskedInput
                name="whatsapp"
                label="Whatsapp"
                value={whatsapp}
                onChange={(e) => {
                  setWhatsapp(e.target.value);
                }}
                mask={phoneMask}
              />
            </TopFormInputContainer>

            <Textarea
              name="bio"
              label="Biografia (máximo de 300 caracteres)"
              value={bio}
              onChange={(e) => {
                setBio(e.target.value);
              }}
            />
          </fieldset>

          <AboutClassSection
            classSubject={subject}
            onUpdateSubject={(subject) => {
              setSubject(subject);
            }}
            classCost={cost}
            onUpdateCost={(cost) => {
              setCost(cost);
            }}
          />

          <ScheduleItemSection
            items={scheduleItems}
            onUpdateItems={(items) => {
              setScheduleItems(items);
            }}
          />

          <FormFooterSection title="Salvar cadastro" isDisabled={formValid} />
        </form>
      </main>
    </Container>
  );
}

export default TeacherForm;
