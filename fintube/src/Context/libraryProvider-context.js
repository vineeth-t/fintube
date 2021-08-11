import { createContext, useContext, useState } from "react";

export const LibraryContext=createContext()
const themeColorWhite={
   color:"black",
   backgroundColor:"white"

}
const themeColorBlack={
   color:"white",
   backgroundColor:"black"

}
export function LibraryProvider({children}){
  
   const[themeColor,setThemeColor]=useState(themeColorWhite);
   function colorChanger(color){
      if(color==='light'){
         setThemeColor(themeColorWhite)
      }else{
         setThemeColor(themeColorBlack)
      }
   }

   return( <LibraryContext.Provider value={{themeColor,colorChanger}}>
        {children}
    </LibraryContext.Provider>
   )
}
export function useLibraryContext(){
   return useContext(LibraryContext)
}