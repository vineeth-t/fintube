import { createContext, useContext, useReducer, useState } from "react";
import { reducer } from "../Reducer/reducer";
export const LibraryContext=createContext()

export function LibraryProvider({children}){
const[state,dispatch]=useReducer(reducer, {
                                              videoPlayingNow,
                                              Route,
                                              likedVideo,
                                              watchLater,
                                              hambug
                                          }
                                       )
                                 
   return( 
   <LibraryContext.Provider value={{state,dispatch}}>
        {children}
    </LibraryContext.Provider>
   )
}
export function useLibraryContext(){
   return useContext(LibraryContext)
}
export const videoPlayingNow={};
export const Route='Home';
export const likedVideo=[];
export const watchLater=[];
export const hambug='leftNav'
// const themeColorWhite={
//    color:"black",
//    backgroundColor:"white"

// }
// const themeColorBlack={
//    color:"white",
//    backgroundColor:"black"

// }
// const[themeColor,setThemeColor]=useState(themeColorWhite);
// function colorChanger(color){
//    if(color==='light'){
//       setThemeColor(themeColorWhite)
//    }else{
//       setThemeColor(themeColorBlack)
//    }
// }