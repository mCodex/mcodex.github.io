// @flow
import React, { PureComponent } from 'react';

import { Grid, Image, Icon, Header } from 'semantic-ui-react';
import SocialMediaButton from '../../components/socialMediaButton';

import styles from './styles';

const avatar = require('../../img/avatar.jpeg');

type State = {
  bgImage: string
};

const socialMediaIcons = [
  {
    iconName: 'github',
    uri: 'https://github.com/mcodex'
  },
  {
    iconName: 'linkedin',
    uri: 'https://br.linkedin.com/in/mateus-andrade-832bb7b4'
  }
];

export default class extends PureComponent<*, State> {
  constructor() {
    super();

    this.state = {
      bgImage: 'https://source.unsplash.com/collection/3178572/1600x900'
    };
  }

  render() {
    const { bgImage } = this.state;

    return (
      <Grid
        style={{
          background: `linear-gradient(0deg,rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url(${bgImage})`,
          backgroundSize: 'cover',
          height: '100vh'
        }}
        padded
      >
        <Grid.Row centered>
          <Grid.Column width={8} verticalAlign="middle" textAlign="center">
            <Image src={avatar} rounded size="small" centered alt="Avatar" />
            <Header as="h1" style={styles.name}>
              Mateus Andrade
            </Header>
            <Header as="h3" style={styles.role}>
              Fullstack Javascript Developer
            </Header>
            <Grid.Row>
              <Grid.Column>
                {socialMediaIcons.map(({ uri, iconName }, i) => {
                  return <SocialMediaButton key={i} iconName={iconName} uri={uri} />;
                })}
              </Grid.Column>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
