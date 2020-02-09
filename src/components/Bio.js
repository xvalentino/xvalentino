import React from 'react';
import Text from 'mineral-ui/Text';
import config from '../../config.json';

export default () => (
  <Text style={{ margin: 20 }} align="center">
    {config.bio}
  </Text>
);
