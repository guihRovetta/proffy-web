import React, { useState } from 'react';

import Select from '../../components/Select';
import TextMaskedInput from '../../components/TextMaskedInput';

import { currencyMask } from '../../utils/Masks';

import { InputContactContainer } from './styles';

interface AboutClassSectionProps {
  classSubject: string;
  classCost: string;
  onUpdateSubject(subject: string): void;
  onUpdateCost(cost: string): void;
}

const AboutClassSection: React.FC<AboutClassSectionProps> = ({
  classSubject,
  classCost,
  onUpdateSubject,
  onUpdateCost,
}) => {
  const [subject, setSubject] = useState(classSubject);
  const [cost, setCost] = useState(classCost);

  return (
    <fieldset>
      <legend>Sobre a aula</legend>

      <InputContactContainer>
        <Select
          name="subject"
          label="Matéria"
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value);
            onUpdateSubject(e.target.value);
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
            onUpdateCost(e.target.value);
          }}
          mask={currencyMask}
        />
      </InputContactContainer>
    </fieldset>
  );
};

export default AboutClassSection;
