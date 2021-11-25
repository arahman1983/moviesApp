import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { View } from '../components/Themed';
import { useDispatch, useSelector } from 'react-redux';
import { MovieCard } from '../components';
import { MovieObject } from '../constants/moviesType';
import { GetFavMovies } from '../redux/actions/movies.action';
import { RootState } from '../redux/store';
import { getFavMovieData } from '../services/AsyncStorage';

export default function Favorites() {
  const favMovies = useSelector((state:RootState) => state.favMovies)
  const dispatch = useDispatch()
  
  React.useEffect(() => {
    let mount: boolean = true
    if(mount){
      getFavMovieData().then((res:MovieObject[] | undefined) => {
        if(typeof res != undefined){
          res != null
          ? dispatch(GetFavMovies([...res]))
          : dispatch(GetFavMovies([]))
        }
      })
    }
    return () => {
      mount = false
    }
  }, [])

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} >
        {
          favMovies.map(({id, title,overview, release_date, poster_path, vote_average, favorite}) => (
            <MovieCard
              key={id}
              id = {id}
              title = {title}
              overview = {overview}
              release_date = {release_date}
              poster_path = {poster_path}
              vote_average = {vote_average}
              favorite = {favorite}
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
