import {SET_MOVIES, SET_LOADING, SET_MOVIE} from '../types';
import {movies} from '../../util/data'

export const getMovies = () => dispatch =>{
    dispatch({
        type:SET_LOADING
    })

    dispatch({
        type:SET_MOVIES,
        payload : movies
    })


}

export const getMovie = (movieTitle) => dispatch =>{
    dispatch({
        type:SET_LOADING
    })
    dispatch({
        type:SET_MOVIE,
        payload :movieTitle
    })
}