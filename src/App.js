import {NavBar,LeftNav,VideoPlayer} from './components/index'
import {VideoPage,LikedVideos,WatchLater} from './Routes/index'
import {useLibraryContext} from '../src/Context/index'
import {Route,Routes} from 'react-router-dom'
import './style.css'
function App() {
  const {dispatch}=useLibraryContext();
  return (
    <div className="App">
      <NavBar/>
      <LeftNav/>
      <Routes>
        <Route path='/' element={<VideoPage/>}/>
        <Route path='/videoPlayer/:videoId' element={<VideoPlayer/>}/>
        <Route path='/likedVideos' element={<LikedVideos/>}/>
        <Route path='/watchLater' element={<WatchLater/>}/>
        <Route path='/history' element={<VideoPlayer/>}/>
      </Routes>
    </div>
  );
}

export default App;
