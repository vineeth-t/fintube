import {videoList} from '../../dataBase'
import { VideoCard } from '..'
export function VideoPage(){   
    return(
        <div className='video-list'>
            {videoList.map((video)=>{return <VideoCard video={video}/>})}
           
        </div>
    )
}