import React from 'react';
import { ThemeProvider, createTheme } from 'mineral-ui/themes';
import Header from '../components/Header';
import ExternalLinks from '../components/ExternalLinks';
import Bio from '../components/Bio';
import Projects from '../components/Projects';
import Title from '../components/Title';

const myAppColor = {
  [10]: 'yellow',
  [20]: 'blue',
  [30]: 'green',
  [40]: '#f78bb8',
  [50]: '#ed5393',
  [60]: 'purple', // link color
  [70]: '#b01355', // link highlight
  [80]: 'yellow',
  [90]: 'cyan',
  [100]: 'black',
};

const theme = createTheme({
  colors: {
    theme: myAppColor,
    danger: 'bronze',
    warning: 'dusk',
    success: 'teal',
  },
});

const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Title />
        <Header />
        <ExternalLinks />
        <Bio />
        <Projects />
      </React.Fragment>
    </ThemeProvider>
  );
};

export default Main;
