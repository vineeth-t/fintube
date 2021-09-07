import { useLibraryContext } from '../../Context';
import { Link } from 'react-router-dom';
import './videoList.css'
export function VideoCard({video}){
    const {id,name,views,UploadedDate,likes,channelName,img}=video
    const {dispatch}=useLibraryContext();
    return(
    <Link to='/videoPlayer'>
       <div className='video-card' onClick={()=>dispatch({type:'videoHasToBePlayed',video:video})}>
                      <img className='thumbnail' src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} />
                      <div className='video-details'>
                            <div>
                                <img className='profile-icon' src={`${img}`} alt='profile-icon'/>
                            </div>
                            <div className='video-content'>
                                <h5>{name}</h5>
                                <h5>{channelName}</h5>
                                <div style={{display:'flex'}}>
                                <h6>{views} views .</h6>
                                <h6>{UploadedDate}</h6>
                            </div>
                        </div>
                      </div>  
                </div>
                </Link>
           
    )
}