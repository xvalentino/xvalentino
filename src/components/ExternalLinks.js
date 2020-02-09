import React from 'react';
import ExternalLink from './ExternalLink';
import Flex, { FlexItem } from 'mineral-ui/Flex';
import config from '../../config.json';

const ExternalLinks = () => (
  <Flex wrap justifyContent={'center'}>
    {config.links.map(linkProps => (
      <FlexItem alignSelf="center" key={linkProps.name}>
        <ExternalLink {...linkProps} />
      </FlexItem>
    ))}
  </Flex>
);

export default ExternalLinks;
