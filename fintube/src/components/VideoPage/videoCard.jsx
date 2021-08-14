import { useLibraryContext } from '../../Context';
import './videoList.css'
export function VideoCard({video}){
    const {id,name,views,UploadedDate,likes,channelName,img}=video
    const {videoPlaying,setVideoPlaying,SetRoute}=useLibraryContext();
    function mediaPlayer(videoPlaying){
        setVideoPlaying(videoPlaying);
        SetRoute('Video')
    }
    return(<div>
       {videoPlaying.id!==id && <div className='video-card' onClick={()=>mediaPlayer({id,name,views,UploadedDate,likes,channelName,img})}>
                      <img className='thumbnail' src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} />
                      <div style={{display:"flex",justifyContent:"space-around"}}>
                          <div>
                            <img className='profile-icon' src={`${img}`}/>
                            </div>
                            <div className='video-content'>
                            <h5 style={{color:"white",marginBottom:'0.2rem'}}>{name}</h5>
                            <h5>{channelName}</h5>
                            <div style={{display:'flex'}}>
                            <h6>{views} views .</h6>
                            <h6>{UploadedDate}</h6>
                            </div>
                        </div>
                      </div>  
                </div>}
                </div>
    )
}