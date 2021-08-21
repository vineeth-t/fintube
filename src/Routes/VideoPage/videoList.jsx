import {videoList} from '../../dataBase'
import { VideoCard } from '../index'
export function VideoPage(){   
    return(
        <div style={{color:'white'}}className='video-list'>
            {videoList.map((video)=>{return <VideoCard video={video}/>})}
        </div>
    )
}