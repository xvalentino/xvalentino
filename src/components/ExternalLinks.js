import React from 'react';
import ExternalLink from './ExternalLink';
import Flex, { FlexItem } from 'mineral-ui/Flex';

const links = [
  {
    name: 'twitter',
    to: 'https://twitter.com/gravitinos',
  },
  { name: 'twitch', to: 'https://twitch.tv/xvalentino13' },
  { name: 'instagram', to: 'https://instagram.com/gravitinos' },
  { name: 'github', to: 'https://github.com/xvalentino' },
  { name: 'keybase', to: 'https://keybase.io/tino' },
  { name: 'soundcloud', to: 'https://soundcloud.com/gravitinos-98277575' },
];

const ExternalLinks = () => (
  <Flex wrap justifyContent={'center'}>
    {links.map(linkProps => (
      <FlexItem alignSelf="center" key={linkProps.name}>
        <ExternalLink {...linkProps} />
      </FlexItem>
    ))}
  </Flex>
);

export default ExternalLinks;
