import React from 'react';
import ReactDOM from 'react-dom';
import Main from './pages';

window.onload = function() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js');
  }

  ReactDOM.render(<Main />, document.getElementById('app'));
};
