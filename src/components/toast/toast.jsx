import { useEffect } from "react"
import { useLibraryContext } from "../../Context/index"
import './toast.css'
export function Toast({msg}){
    const{dispatch}=useLibraryContext();
    useEffect(()=>{
        let timeOut=setTimeout(()=>{
         dispatch({type:'removeToast'})
        },2000)
        return()=>{
            clearTimeout(timeOut)
        } 
    })
    return (
        <div className='toast'>
            <h5>{msg}</h5>
        </div>
    )
}