import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {LibraryProvider} from './Context/libraryProvider-context'
ReactDOM.render(
  <React.StrictMode>
     <LibraryProvider>
      <App />
    </LibraryProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

