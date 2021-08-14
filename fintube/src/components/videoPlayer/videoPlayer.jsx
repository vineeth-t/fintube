import { useLibraryContext } from "../../Context";
import { videoList } from "../../dataBase";
import { VideoCard } from "..";
import './videoPlayer.css';
import '../VideoPage/videoList';
export const VideoPlayer = () => {
  const {videoPlaying}=useLibraryContext();
  return(
  <div className='media-player-body'>
      <div  className="media-player">
        <iframe
        width="800" height="450" 
          src={`https://www.youtube.com/embed/${videoPlaying.id}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe> 
        <div className='profile-info'>
                          <div>
                            <img className='profile-icon' src={`${videoPlaying.img}`}/>
                            </div>
                            <div className='media-content'>
                            <h5 style={{color:"white",marginBottom:'0.2rem'}}>{videoPlaying.name}</h5>
                            <h5>{videoPlaying.channelName}</h5>
                            <div style={{display:'flex',paddingTop:'0.5rem'}}>
                            <h6>{videoPlaying.views} views .</h6>
                            <h6>{videoPlaying.UploadedDate}</h6>
                          </div>
                        </div>
                      </div>  
      </div>
      <div classsName='media-list'>
        {videoList.map((video)=>{
           return(
            <VideoCard video={video} />
        )
        })}
      </div>
    </div>)
  };
  