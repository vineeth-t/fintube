export function reducer(state,action){
    switch(action.type){
        case 'videoHasToBePlayed':
            return {...state,videoPlayingNow:action.video}
        case 'likedVideo':
            if(state.likedVideo.some((video)=>video.id===action.video.id)){
                return {
                    ...state,likedVideo:[...state.likedVideo.filter((video)=>video.id!==action.video.id)],toast:'videoUnLiked'
                }
            }
            return {...state,likedVideo:[...state.likedVideo,action.video],toast:'videoLiked'}
        case 'watchLater':
            if(state.watchLater.some((video)=>video.id===action.video.id)){
                return {
                    ...state,toast:'alreadyInWatchLater',playlist:''
                }
            }
            return {...state,watchLater:[...state.watchLater,action.video],toast:'AddedToWatchLater'}
        case 'Route':
            return{...state,Route:action.route}
        case 'hambug':
            return {...state,hambug:action.payload}
        case 'removeToast':
            return{...state,toast:''}
        case 'save':
            if(state.playlist==='openPlaylist'){
                return{...state,playlist:''}
            }
            return{...state,playlist:'openPlaylist'}
    }
}
