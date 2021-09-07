import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {LibraryProvider} from './Context/libraryProvider-context';
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
     <LibraryProvider>
       <Router>
          <App/>
      </Router>
    </LibraryProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

