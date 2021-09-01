import { useLibraryContext } from "../../Context";
import {VideoCard} from '../VideoPage/videoCard';
import './likedVideos.css'
export function LikedVideos(){
    const {state:{likedVideo}}=useLibraryContext();
    return(
        <div className='liked-videos'>
            {likedVideo.length===0&&<div style={{color:"white"}}>No liked Videos </div>}
           {likedVideo.map((video)=>{return <VideoCard video={video}/>})}
        </div>

    )
}