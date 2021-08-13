import {videoList} from '../../dataBase'
import './videoList.css'
export function VideoPage(){
    return(
        <div className='video-list'>
           
            {videoList.map(({id,name,views,UploadedDate,likes,channelName,img})=>{
                console.log({img})
            return(
                <div className='video-card'>
                      <img className='thumbnail' src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} />
                      <div style={{display:"flex",justifyContent:"space-around"}}>
                          <div>
                            <img className='profile-icon' src={`${img}`}/>
                            </div>
                            <div className='video-content'>
                            <h5 style={{color:"white",marginBottom:'0.4rem'}}>{name}</h5>
                            <h6>{channelName}</h6>
                            <h6>{views} views  {UploadedDate}</h6>
                        </div>
                      </div>
                      
                </div>
             
            )}
            )}
           
        </div>
    )
}