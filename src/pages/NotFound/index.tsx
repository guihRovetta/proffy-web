import React from 'react';
import { useHistory } from 'react-router-dom';

import AnimatedLottieComponent from '../../components/AnimatedLottieComponent';
import Button from '../../components/Button';

import notFoundAnimation from '../../assets/animations/not-found.json';

import { Container, Wrapper } from './styles';

const NotFound: React.FC = () => {
  const history = useHistory();

  function handleBackToHome() {
    history.push('/');
  }

  return (
    <Container>
      <Wrapper>
        <AnimatedLottieComponent
          animationData={notFoundAnimation}
          width={231 * 1.5}
          height={164 * 1.5}
        />
        <h1>Ops...Parece que você se perdeu</h1>
        <p>
          Mas não se preocupe, você pode voltar a página inicial, clicando no
          botão abaixo
        </p>
        <Button onClick={handleBackToHome}>Voltar</Button>
      </Wrapper>
    </Container>
  );
};

export default NotFound;
