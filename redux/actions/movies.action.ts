import { MovieObject } from "../../constants/moviesType";
import { MyActionType } from "../reducers/Movies.reducer";
import { actionTypes } from "./actionType";

export function GetMovies(movies:MovieObject[]): MyActionType {
  return {
    type: actionTypes.GET_MOVIES,
    payload: movies
  }
}

export function AddMovies(movie:MovieObject): MyActionType {
  return {
    type: actionTypes.ADD_MOVIE,
    payload: [movie]
  }
}


export function GetFavMovies(movies:MovieObject[]): MyActionType {
  return {
    type: actionTypes.GET_FAV_MOVIES,
    payload: movies
  }
}

export function AddFavMovies(movie:MovieObject): MyActionType {
  return {
    type: actionTypes.ADD_TO_FAVORITES,
    payload: [movie]
  }
}

export function DeleteFavMovies(movie:MovieObject): MyActionType {
  return {
    type: actionTypes.REMOVE_FAV_MOVIE,
    payload: [movie]
  }
}