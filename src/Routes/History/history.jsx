import { useLibraryContext } from "../../Context/libraryProvider-context"
import { VideoCard } from "../VideoPage/videoCard"
import './history.css'
export function History(){
    const{state:{history}}=useLibraryContext()
    return( <div className='history'>
             {history.length===0&&<div style={{color:"white"}}>Watch any video to appear here</div>}
            {history.map((video)=>{return <VideoCard video={video}/>})}
            </div>
    )
}