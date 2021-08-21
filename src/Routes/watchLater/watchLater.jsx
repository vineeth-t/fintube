import { useLibraryContext } from "../../Context";
import { VideoCard } from "../VideoPage/videoCard";

export function WatchLater(){
        const {state:{watchLater}}=useLibraryContext();
        return(
            <div className='video-liked'>
               {watchLater.map((video)=>{return <VideoCard video={video}/>})}
            </div>
        )

}