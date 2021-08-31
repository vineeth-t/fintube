export function reducer(state,action){
    switch(action.type){
        case 'videoHasToBePlayed':
            return {...state,videoPlayingNow:action.video,Route:'Video'}
        case 'likedVideo':
            return {...state,likedVideo:[...state.likedVideo,action.video],toast:'videoLiked'}
        case 'watchLater':
                return {...state,watchLater:[...state.watchLater,action.video],toast:'AddedToWatchLater'}
        case 'Route':
            return{...state,Route:action.route}
        case 'hambug':
            return {...state,hambug:action.payload}
        case 'removeToast':
            return{...state,toast:''}
    }
}
