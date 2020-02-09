import React from 'react';
import useMetaTags from 'react-metatags-hook';
import config from '../../config.json';

const Title = () => {
  useMetaTags(config.meta);
  return null;
};

export default Title;
