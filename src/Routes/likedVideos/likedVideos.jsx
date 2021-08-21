import { useLibraryContext } from "../../Context";
import {VideoCard} from '../VideoPage/videoCard'
import './likedVideos.css'
export function LikedVideos(){
    const {likedVideo}=useLibraryContext();
    return(
        <div className='video-liked'>
           {likedVideo.map((video)=>{return <VideoCard video={video}/>})}
        </div>

    )
}