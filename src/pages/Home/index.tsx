import React from 'react';
import { FaLinkedin, FaGithub, FaChevronRight } from 'react-icons/fa';

import avatarImg from '../../assets/img/avatar.jpeg';

import { Container, Header, MainContainer, SocialIconsContainer } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <a
          href="https://github.com/mCodex/mcodex.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>
            <small>Source Code</small>
          </p>
          <FaChevronRight />
        </a>
      </Header>
      <MainContainer>
        <img src={avatarImg} alt="Mateus Andrade" />
        <h1>Mateus Andrade</h1>
        <h3>React/NodeJS & React-Native Developer</h3>
        <SocialIconsContainer>
          <a
            data-testid="githubButton"
            href="https://github.com/mcodex"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            data-testid="linkedinButton"
            href="https://br.linkedin.com/in/mateus-andrade-832bb7b4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </SocialIconsContainer>
      </MainContainer>
    </Container>
  );
};

export default Home;