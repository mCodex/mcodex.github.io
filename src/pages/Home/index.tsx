import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

import avatarImg from '../../assets/img/avatar.jpeg';

import { Container, SocialIconsContainer } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <img src={avatarImg} alt="Mateus Andrade" />
      <h1>Mateus Andrade</h1>
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
    </Container>
  );
};

export default Home;
