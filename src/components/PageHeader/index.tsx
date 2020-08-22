import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import { Header, TopBarContainer, TopBarWrapper, Content } from './styles';

interface PageHeaderProps {
  title: string;
  description?: string;
  pageTitle?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  pageTitle,
  children,
}) => {
  return (
    <Header>
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
        <div>
          <strong>{title}</strong>
        </div>

        {description && <p>{description}</p>}

        {children}
      </Content>
    </Header>
  );
};

export default PageHeader;
