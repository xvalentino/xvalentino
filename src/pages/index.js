import React from 'react';
import { ThemeProvider } from 'mineral-ui/themes';
import Header from '../components/Header';
import ExternalLinks from '../components/ExternalLinks';

const Main = () => {
  return (
    <ThemeProvider>
      <React.Fragment>
        <Header />
        <ExternalLinks />
      </React.Fragment>
    </ThemeProvider>
  );
};

export default Main;
