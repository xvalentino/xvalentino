import React from 'react';
import Text from 'mineral-ui/Text';
import config from '../../config.json';

const Header = () => (
  <React.Fragment>
    <Text align="center" element="h1">
      {config.header}
    </Text>
  </React.Fragment>
);
export default Header;
