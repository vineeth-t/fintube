import { useLibraryContext } from "../../Context";
import { VideoCard } from "../VideoPage/videoCard";
import './watchLater.css'

export function WatchLater(){
        const {state:{watchLater}}=useLibraryContext();
        return(
            <div className='watch-later'>
                  {watchLater.length===0&&<div style={{color:"white"}}>Add here to watch later </div>}
               {watchLater.map((video)=>{return <VideoCard video={video}/>})}
            </div>
        )

}