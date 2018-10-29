import React from 'react';
import { ThemeProvider } from 'mineral-ui/themes';
import Text from 'mineral-ui/Text';

const Main = () => {
  return (
    <ThemeProvider>
      <Text element="h1">Valentino</Text>
    </ThemeProvider>
  );
};

export default Main;
