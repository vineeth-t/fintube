import { likedVideo } from "../Context/libraryProvider-context"

export function reducer(state,action){
    switch(action.type){
        case 'videoHasToBePlayed':
            return {...state,videoPlayingNow:action.video,Route:'Video'}
        case 'likedVideo':
            return {...state,likedVideo:[...state.likedVideo,action.video]}
        case 'watchLater':
                return {...state,watchLater:[...state.watchLater,action.video]}
        case 'Route':
            return{...state,Route:action.route}
        case 'hambug':
            return {...state,hambug:action.payload}
    }
}
