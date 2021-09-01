import { useLibraryContext } from '../../Context';
import './playlist.css'
export function CreatePlaylist(){
    const {state:{videoPlayingNow,toast},dispatch}=useLibraryContext();
return(
    <div className='playlist-card'>
        <div className='playlist'>
            <input type='checkbox' onChange={()=>dispatch({type:'watchLater',video:videoPlayingNow})}/>
            <label>watch Later</label>
        </div>
        
    </div>
)
}