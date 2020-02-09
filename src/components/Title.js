import React from 'react';
import useDocumentTitle from '@rehooks/document-title';
import config from '../../config.json';

const Title = () => {
  useDocumentTitle(config.title);
  return null;
};

export default Title;
