// import { createStore, applyMiddleware, compose } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { MoviesReducer, FavMoviesReducer } from './reducers/Movies.reducer'


export const store = configureStore({
  reducer: {
    movies: MoviesReducer,
    favMovies: FavMoviesReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch