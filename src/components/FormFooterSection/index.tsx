import React from 'react';

import Button from '../../components/Button';

import warningIcon from '../../assets/images/icons/warning.svg';

import { Container } from './styles';

interface FormFooterSectionProps {
  title: string;
  isDisabled: boolean;
}

const FormFooterSection: React.FC<FormFooterSectionProps> = ({
  title,
  isDisabled,
}) => {
  return (
    <Container>
      <p>
        <img src={warningIcon} alt="Aviso importante" />
        Importante! <br />
        Preencha todos os dados corretamente
      </p>
      <Button type="submit" disabled={!isDisabled}>
        {title}
      </Button>
    </Container>
  );
};

export default FormFooterSection;
