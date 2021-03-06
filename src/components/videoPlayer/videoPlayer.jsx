import { useLibraryContext } from "../../Context";
import { videoList } from "../../dataBase";
import { VideoCard } from "../../Routes/VideoPage/videoCard";
import './videoPlayer.css';
import '../../Routes/VideoPage/videoList';
export const VideoPlayer = () => {
  const {setWatchLater,setLikedVideo,videoPlaying}=useLibraryContext();
  function likedVideoHandler(videoPlaying){
    setLikedVideo((alreadyLikedVideos)=>alreadyLikedVideos.some((alreadyLikedVideo)=>alreadyLikedVideo.id===videoPlaying.id)?[...alreadyLikedVideos]:[
     ...alreadyLikedVideos,videoPlaying
    ])
  }
  function watchLater(videoPlaying){
    setWatchLater((alreadyLikedVideos)=>alreadyLikedVideos.some((alreadyLikedVideo)=>alreadyLikedVideo.id===videoPlaying.id)?[...alreadyLikedVideos]:[
     ...alreadyLikedVideos,videoPlaying
    ])
  }
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
                            <h5 style={{color:"white",marginBottom:'0.2rem',width:'30rem'}}>{videoPlaying.name}</h5>
                            <h5>{videoPlaying.channelName}</h5>
                            <div style={{display:'flex',paddingTop:'0.5rem',justifyContent:'space-between',alignItems:'center'}}>
                              <div style={{display:'flex'}}>
                                <h5>{videoPlaying.views} views .</h5>
                                <h5>{videoPlaying.UploadedDate}</h5>
                              </div>
                              <div style={{display:"flex",alignItems:'center'}}>
                                    <div onClick={()=>likedVideoHandler(videoPlaying)} style={{marginRight:'0.5em',display:'flex',alignItems:'center'}} >
                                      <svg stroke="currentColor" fill='currentcolor' stroke-width="0" viewBox="0 0 1024 1024"height="1.5em" width="1.4em" xmlns="http://www.w3.org/2000/svg"><path d="M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81zm636.4-353l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0 1 42.2-32.3c7.6 0 15.1 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z"></path></svg>
                                      <label style={{marginRight:'1em'}}>{videoPlaying.likes}</label>
                                      <svg width="1.4em" height="1.5em" viewBox="0 0 24 24"><path d="M19 15V3h4v12h-4M15 3a2 2 0 0 1 2 2v10c0 .55-.22 1.05-.59 1.41L9.83 23l-1.06-1.06c-.27-.27-.44-.64-.44-1.06l.03-.31l.95-4.57H3a2 2 0 0 1-2-2v-2c0-.26.05-.5.14-.73l3.02-7.05C4.46 3.5 5.17 3 6 3h9m0 2H5.97L3 12v2h8.78l-1.13 5.32L15 14.97V5z" fill="currentColor"></path></svg>
                                  </div>
                                  <div style={{display:'flex',alignItems:'center',marginLeft:'0.5em'}} onClick={()=>watchLater(videoPlaying)} >
                                      <svg width="1.4em" height="1.5em" viewBox="0 0 24 24"><path d="M12 20c4.4 0 8-3.6 8-8s-3.6-8-8-8s-8 3.6-8 8s3.6 8 8 8m0-18c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2m.5 5v5.2L9.8 17l-1.3-.8l2.5-4.4V7h1.5z" fill="currentColor"></path></svg>
                                      <label>Watch Later</label>
                                  </div>
                              </div>
                          </div>
                        </div>
                      
                      </div>  
      </div>
      <div classsName='media-list'>
        {videoList.map((video)=>
        video.id!==videoPlaying.id&&<VideoCard video={video} />
        )}
      </div>
    </div>)
  };
  