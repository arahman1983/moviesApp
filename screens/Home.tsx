import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { MovieCard } from '../components'
import { View } from '../components/Themed';
import { MovieObject } from '../constants/moviesType';
import { GetMovies } from '../redux/actions/movies.action';
import { RootState } from '../redux/store';
import { RootTabScreenProps } from '../types';
import movies from './movies.json'

export default function Home({ navigation }: RootTabScreenProps<'Home'>) {
  const allMovies = useSelector((state:RootState) => state.movies)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(GetMovies(movies.map((m):MovieObject => ({
      id: m.id,
      title : m.title,
      overview: m.overview,
      release_date: m.release_date,
      poster_path: m.poster_path,
      vote_average: m.vote_average,
      favorite: false
    }))))
    return () => {
      
    }
  }, [])

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {
          allMovies.map(({id, title,overview, release_date, poster_path, vote_average}) => (
            <MovieCard
              key={id}
              id = {id}
              title = {title}
              overview = {overview}
              release_date = {release_date}
              poster_path = {poster_path}
              vote_average = {vote_average}
              favorite = {false}
            />
          
          ))
        }
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'top',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  scrollView:{
    width: '100%'
  }
});
