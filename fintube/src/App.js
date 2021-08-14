import {NavBar,LeftNav,VideoPage,VideoPlayer} from './components/index'
import {useLibraryContext} from '../src/Context/index'
import './style.css'
function App() {
  const {Route,SetRoute}=useLibraryContext();
  return (
    <div className="App">
      <NavBar Route={Route} setState={SetRoute}/>
      <div className='App-hero'>
         <LeftNav SetRoute={SetRoute}/>
      </div>
      {Route==='Home'&& <VideoPage/> }
      {Route==='Video' && <VideoPlayer/>}
      {Route==='Liked' && <VideoPlayer/>}
      {Route==='WatchLater' && <VideoPlayer/>}
      {Route==='History' && <VideoPlayer/>}
    </div>
  );
}

export default App;
