import { createContext, useContext, useState } from "react";

export const LibraryContext=createContext()

export function LibraryProvider({children}){
const [videoPlaying,setVideoPlaying]=useState({});
const[Route,SetRoute]=useState('Home');
   return( <LibraryContext.Provider value={{videoPlaying,setVideoPlaying,Route,SetRoute}}>
        {children}
    </LibraryContext.Provider>
   )
}
export function useLibraryContext(){
   return useContext(LibraryContext)
}

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