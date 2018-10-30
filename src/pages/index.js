import React from 'react';
import { ThemeProvider } from 'mineral-ui/themes';
import Header from '../components/Header';
import ExternalLinks from '../components/ExternalLinks';
import Bio from '../components/Bio';
import Projects from '../components/Projects';

const Main = () => {
  return (
    <ThemeProvider>
      <React.Fragment>
        <Header />
        <ExternalLinks />
        <Bio />
        <Projects />
      </React.Fragment>
    </ThemeProvider>
  );
};

export default Main;
