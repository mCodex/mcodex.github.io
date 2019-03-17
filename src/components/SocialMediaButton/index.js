/* @flow */

import React from 'react';
import { Icon } from 'semantic-ui-react';

type Props = {
  onClick?: Function,
  iconName: string,
  uri: string
};

export default function SocialMediaButton({ onClick, iconName, uri }: Props) {
  return (
    <a
      id={`${iconName}Button`}
      href={uri}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => onClick()}
    >
      <Icon name={iconName} size="big" style={{ color: 'white' }} />
    </a>
  );
}

SocialMediaButton.defaultProps = {
  onClick: () => ({})
};
