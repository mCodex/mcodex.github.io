import styled from 'styled-components';
import Image from 'next/image'

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
`;

export const Header = styled.header`
  display: flex;
  place-content: center flex-end;

  a {
    display: flex;
    color: #fff;
    place-content: center;
    flex-direction: row;
    text-decoration: none;

    svg {
      margin-top: 2px;
    }
  }
`;

export const MainContainer = styled.main`
  display: flex;
  flex: 1;
  flex-grow: 1;
  flex-direction: column;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/assets/img/cover.jpg');
  background-size: cover;
  place-content: center;
  text-align: center;

  h3 {
    margin: 5px 0;
  }

  > div {
    align-self: center;
    margin-bottom: 20px;
  }
`;

export const Avatar = styled(Image).attrs({
  width: "200px",
  height: "200px"
})`
  border-radius: 50%;
  border: 2px solid #fff;
`

export const SocialIconsContainer = styled.div`
  margin-top: 30px;

  a {
    margin-right: 5px;

    svg {
      color: #fff;
      width: 35px;
      height: 35px;
    }
  }
`;
