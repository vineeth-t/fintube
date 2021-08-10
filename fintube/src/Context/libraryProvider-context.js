import { createContext } from "react";

const LibraryContext=createContext()

export function LibraryProvider({children}){
   return( <LibraryContext.Provider>
        {children}
    </LibraryContext.Provider>
   )
}