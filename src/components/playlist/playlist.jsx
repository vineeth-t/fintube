import { useState } from 'react';
import { useLibraryContext } from '../../Context';
import './playlist.css'
export function CreatePlaylist(){
    const {state:{playlist},dispatch}=useLibraryContext();
    const[createNewPlaylist,setNewPlaylist]=useState(false);
    const[newPlayListName,setNewPlayListName]=useState('')
    function playlistCreator(e){
        e.preventDefault();
        dispatch({type:'createNewPlaylist',name:newPlayListName})
    }
return(
    <div className='playlist-card'>
        <div className='playlist'>
            <label><input type='checkbox' onChange={()=>dispatch({type:'watchLater',video:videoId})}/>watch Later</label>
            <label style={{display:createNewPlaylist ?"none":"block"}}onClick={()=>setNewPlaylist(true)}>
            <svg width="1em" height="1em" viewBox="0 0 24 24"><path d="M7 12h4V8h1v4h4v1h-4v4h-1v-4H7v-1zm4.5-9a9.5 9.5 0 1 1 0 19a9.5 9.5 0 0 1 0-19zm0 1a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17z" fill="currentColor"></path>
            </svg>Add New Playlist
            </label>
            {createNewPlaylist&&
            <form onClick={(event)=>playlistCreator(event)} className='playlist-creator'>
             <input type='text' onChange={(e)=>setNewPlayListName(e.target.value)}/>
             <button className='btn-submit'type='submit'> 
             <svg width="1.5em" height="1em" viewBox="0 0 24 24"><path d="M7 12h4V8h1v4h4v1h-4v4h-1v-4H7v-1zm4.5-9a9.5 9.5 0 1 1 0 19a9.5 9.5 0 0 1 0-19zm0 1a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17z" fill="currentColor"></path>
            </svg>Add New Playlist</button>
            </form>
          }
        </div> 
    </div>)

}