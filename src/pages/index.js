import React from 'react';
import { ThemeProvider } from 'mineral-ui/themes';
import Header from '../components/Header';
import ExternalLinks from '../components/ExternalLinks';
import Bio from '../components/Bio';

const Main = () => {
  return (
    <ThemeProvider>
      <React.Fragment>
        <Header />
        <ExternalLinks />
        <Bio />
      </React.Fragment>
    </ThemeProvider>
  );
};

export default Main;
