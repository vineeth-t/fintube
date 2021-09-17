import { createContext, useContext, useReducer, useState } from "react";
import { reducer } from "../Reducer/reducer";
export const LibraryContext=createContext()

export function LibraryProvider({children}){
const[state,dispatch]=useReducer(reducer, {
                                              videoPlayingNow,
                                              Route,
                                              likedVideo,
                                              watchLater,
                                              hambug,toast,playlist,history
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
export const hambug='leftNav';
export const toast='';
export const playlist=''
export const history=[]