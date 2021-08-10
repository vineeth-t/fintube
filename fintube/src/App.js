import { useState } from 'react';
import './App.css';
import {NavBar} from './components/index'
function App() {
  const[Route,SetRoute]=useState('Home')
  return (
    <div className="App">
      <NavBar Route={Route} setState={SetRoute}/>
    </div>
  );
}

export default App;
