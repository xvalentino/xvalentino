import React from 'react';
import Button from 'mineral-ui/Button';

const ExternalLink = ({ name, to }) => (
  <Button minimal element="a" href={to}>
    {name}
  </Button>
);
export default ExternalLink;
