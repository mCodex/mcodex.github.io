import styled from 'styled-components';

import coverImg from '../../assets/img/cover.jpg';

export const Container = styled.main`
  display: flex;
  height: 100%;
  flex-direction: column;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${coverImg});
  background-size: cover;
  place-content: center;
  text-align: center;

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    align-self: center;
    margin-bottom: 20px;
    border: 2px solid #fff;
  }
`;

export const SocialIconsContainer = styled.div`
  margin-top: 20px;

  a {
    margin-right: 5px;

    svg {
      color: #fff;
      width: 25px;
      height: 25px;
    }
  }
`;
