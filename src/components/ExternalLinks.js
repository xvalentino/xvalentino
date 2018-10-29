import React from 'react';
import ExternalLink from './ExternalLink';
import Flex from 'mineral-ui/Flex';

const links = [
  { name: 'twitter', to: 'https://twitter.com/gravitinos' },
  { name: 'twitch', to: 'https://twitch.tv/xvalentino13' },
  { name: 'instagram', to: 'https://instagram.com/gravitinos' },
  { name: 'github', to: 'https://github.com/xvalentino' },
  { name: 'keybase', to: 'https://keybase.io/tino' },
  { name: 'soundcloud', to: 'https://soundcloud.com/gravitinos-98277575' },
];

const ExternalLinks = () => (
  <Flex justifyContent="center">
    {links.map(linkProps => (
      <ExternalLink key={linkProps.name} {...linkProps} />
    ))}
  </Flex>
);

export default ExternalLinks;
