import React from 'react';
import Button from 'mineral-ui/Button';

const ExternalLink = ({ name, to, icon }) => (
  <Button iconStart={icon} minimal element="a" href={to}>
    {name}
  </Button>
);
export default ExternalLink;
