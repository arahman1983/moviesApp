import * as React from 'react';
import { NativeModule, ScrollView, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { MovieCard } from '../components'
import { View } from '../components/Themed';
import { MovieObject } from '../constants/moviesType';
import { GetMovies } from '../redux/actions/movies.action';
import { RootState } from '../redux/store';
import getAllMovies from '../services/getAllMovies';
import { RootTabScreenProps } from '../types';
import movies from './movies.json'

export default function Home({ navigation }: RootTabScreenProps<'Home'>) {
  const allMovies = useSelector((state:RootState) => state.movies)
  const dispatch = useDispatch()
  const [pageNo, setPageNo] = React.useState(0)
  const [totalPages, setTotalPages] = React.useState(2)
  
  const ifCloseToTop = (nativeEvent: any) => {
    return nativeEvent.layoutMeasurement.height + nativeEvent.contentOffset.y >=
    nativeEvent.contentSize.height - 100;
  };

  function updateList({nativeEvent}: any){
    if (ifCloseToTop(nativeEvent)) {
      updateMovieList()
    }
  }

  function updateMovieList (){
    setPageNo(pageNo +1 )
    getAllMovies(pageNo + 1)
    .then(result => {
      if(result.total_pages > totalPages){
        setTotalPages(result.total_pages)
      }
      dispatch(GetMovies(changeOpj(result.results)))
    }
    )
  }

  function changeOpj (array: []){
    return array.map((m:any):MovieObject => ({
      id : m.id,
      title : m.title,
      overview : m.overview,
      release_date : m.release_date,
      poster_path : m.poster_path,
      vote_average : m.vote_average,
      favorite: false
    }))
  }

  React.useEffect(() => {
    let mount: boolean = true
    if(mount){
      updateMovieList()
    }
    return () => {
      mount = false
    }
  }, [])

  return (
    <View style={styles.container}>
      <ScrollView 
        style={styles.scrollView} 
        onScroll={updateList}
        scrollEventThrottle={400}
        >
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
