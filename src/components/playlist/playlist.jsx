import { useLibraryContext } from '../../Context';
import './playlist.css'
export function CreatePlaylist(){
    const {state:{videoPlayingNow,toast},dispatch}=useLibraryContext();
return(
    <div className='playlist-card'>
        <div className='playlist'>
            <label><input type='checkbox' onChange={()=>dispatch({type:'watchLater',video:videoPlayingNow})}/>watch Later</label>
            <label><svg width="1em" height="1em" viewBox="0 0 24 24"><path d="M7 12h4V8h1v4h4v1h-4v4h-1v-4H7v-1zm4.5-9a9.5 9.5 0 1 1 0 19a9.5 9.5 0 0 1 0-19zm0 1a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17z" fill="currentColor"></path></svg>Add New Playlist</label>
        </div>
        
    </div>
)
}