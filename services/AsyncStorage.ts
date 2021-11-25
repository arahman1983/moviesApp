import AsyncStorage from '@react-native-async-storage/async-storage';
import { MovieObject } from '../constants/moviesType';

// type getDataFnType = () => Promise<boolean>;
// type storeFnType = (subString: string) => void;

export const storeFavMovieData = async (value:MovieObject[]) => {
  const favMovies = JSON.stringify(value)
  try {
    await AsyncStorage.setItem('Favorite_Movies', favMovies)
  } catch (error) {
    console.log("storeError")
  }
}

export async function getFavMovieData():Promise<MovieObject[] | undefined> {
  try {
    const value = await AsyncStorage.getItem('Favorite_Movies')
    return value != null ? JSON.parse(value) : null;
  } catch (error) {
    console.log("storeError")
  }
}