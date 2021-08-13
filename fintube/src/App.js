import { useState } from 'react';
import {NavBar,LeftNav,VideoPage} from './components/index'
import {useLibraryContext} from '../src/Context/index'
import './style.css'
function App() {
  const[Route,SetRoute]=useState('Home');
  const{themeColor}=useLibraryContext()
  return (
    <div className="App" style={themeColor}>
      <NavBar Route={Route} setState={SetRoute}/>
      <div className='App-hero'>
         <LeftNav/>
         <VideoPage/>
      </div>
      
    </div>
  );
}

export default App;
