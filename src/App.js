import {NavBar,LeftNav,VideoPlayer} from './components/index'
import {VideoPage,LikedVideos,WatchLater} from './Routes/index'
import {useLibraryContext} from '../src/Context/index'
import './style.css'
function App() {
  const {state:{Route},dispatch}=useLibraryContext();
  return (
    <div className="App">
      <NavBar/>
      <LeftNav/>
      {Route==='Home'&& <VideoPage/> }
      {Route==='Video' && <VideoPlayer/>}
      {Route==='Liked' && <LikedVideos/>}
      {Route==='WatchLater' && <WatchLater/>}
      {Route==='History' && <VideoPlayer/>}
    </div>
  );
}

export default App;
