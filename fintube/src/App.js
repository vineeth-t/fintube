import { useState } from 'react';
import {NavBar,LeftNav,VideoPage,VideoPlayer} from './components/index'
import {useLibraryContext} from '../src/Context/index'
import './style.css'
function App() {
  const[Route,SetRoute]=useState('Home');
  const {videoId,videoPlayer}=useLibraryContext();
  return (
    <div className="App">
      <NavBar Route={Route} setState={SetRoute}/>
      <div className='App-hero'>
         <LeftNav/>
      </div>
      { videoPlayer ? <VideoPlayer/>: <VideoPage/>}
    </div>
  );
}

export default App;
