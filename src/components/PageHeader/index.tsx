import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import {
  Header,
  TopBarContainer,
  TopBarWrapper,
  Content,
  TitleContainer,
} from './styles';

interface PageHeaderProps {
  title?: string;
  description?: string;
  pageTitle?: string;
  emoji?: string;
  emojiMessage?: string;
  headerHeightSize?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  pageTitle,
  emoji,
  emojiMessage,
  headerHeightSize,
  children,
}) => {
  return (
    <Header heightSize={headerHeightSize}>
      <TopBarContainer>
        <TopBarWrapper>
          <Link to="/">
            <img src={backIcon} alt="Voltar" />
          </Link>

          <span>{pageTitle}</span>

          <Link to="/">
            <img src={logoImg} alt="Proffy" />
          </Link>
        </TopBarWrapper>
      </TopBarContainer>

      <Content>
        <TitleContainer>
          <strong>{title}</strong>

          {emojiMessage && (
            <div>
              <img src={emoji} alt="Emoji" />
              <p>{emojiMessage}</p>
            </div>
          )}
        </TitleContainer>

        {description && <p>{description}</p>}

        {children}
      </Content>
    </Header>
  );
};

export default PageHeader;
