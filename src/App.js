import {NavBar,LeftNav,VideoPlayer} from './components/index'
import {VideoPage,LikedVideos,WatchLater,History,Library} from './Routes/index'
import {Route,Routes} from 'react-router-dom'
import { Navigate } from 'react-router'
import './style.css'
import { useState } from 'react/cjs/react.development'
function App() {
const[isUserLoggedIn,setLogin]=useState(true)
function PrivateRoute({...props}){
    return  isUserLoggedIn?<Route {...props}/>:<Navigate to='/'/>
}
  return (
    <div className="App">
      <NavBar/>
      <LeftNav/>
      <Routes>
        <Route path='/' element={<VideoPage/>}/>
        <Route path='/videoPlayer/:videoId' element={<VideoPlayer/>}/>
        <PrivateRoute path='/library' element={<Library/>}/>
        <PrivateRoute path='/likedVideos' element={<LikedVideos/>}/>
        <PrivateRoute path='/watchLater' element={<WatchLater/>}/>
        <PrivateRoute path='/history' element={<History/>}/>
      </Routes>
    </div>
  );
}

export default App;
