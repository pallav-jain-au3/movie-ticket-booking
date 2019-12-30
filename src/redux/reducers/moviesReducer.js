import {SET_MOVIES, SET_LOADING, SET_MOVIE} from '../types'

const initialState = {
    movies : [],
    loading : false,
    movie : {}
}

export default function (state = initialState, action){
    switch (action.type){
        case SET_MOVIES:
            return {
                ...state,
                movies:action.payload,
                loading : false
            }
        case SET_LOADING:{
            return {
                ...state,
                loading: true
            }
        }    
        case SET_MOVIE:
            let movie = state.movies.filter(movie => movie.title === action.payload )[0]
            return {
                ...state,
                movie : movie, 
                loading : false
            }
        default :
            return state    
    }

}
