import { AnyAction } from "redux";
import { MovieObject } from "../../constants/moviesType";
import { actionTypes } from "../actions/actionType";

const movies: MovieObject[] = []
const favMovies : MovieObject[] = []

export interface MyActionType {
  type: string,
  payload: MovieObject[]
}

export function MoviesReducer(state: MovieObject[] = movies, action: MyActionType | AnyAction): MovieObject[] {
  switch (action.type) {
    case actionTypes.GET_MOVIES:
      return [...action.payload]
    case actionTypes.ADD_MOVIE:
      return [...state, ...action.payload]
    default:
      return state
  }
}

export function FavMoviesReducer (state: MovieObject[] = favMovies, action: MyActionType | AnyAction): MovieObject[] {
  switch (action.type) {
    case actionTypes.GET_FAV_MOVIES:
      return [...action.payload]
    case actionTypes.ADD_TO_FAVORITES:
      return [...state, ...action.payload]
    case actionTypes.REMOVE_FAV_MOVIE:
      return state.filter( m => m.id !== action.payload[0].id)
    default:
      return state
  }
}