import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { MovieCard } from '../components'
import { View } from '../components/Themed';
import { MovieObject } from '../constants/moviesType';
import { GetFavMovies, GetMovies } from '../redux/actions/movies.action';
import { RootState } from '../redux/store';
import { getFavMovieData } from '../services/AsyncStorage';
import getAllMovies from '../services/getAllMovies';
import { RootTabScreenProps } from '../types';

export default function Home({ navigation }: RootTabScreenProps<'Home'>) {
  const allMovies = useSelector((state:RootState) => state.movies)
  const favMovies = useSelector((state:RootState) => state.favMovies)
  const dispatch = useDispatch()
  const [pageNo, setPageNo] = React.useState(0)
  const [totalPages, setTotalPages] = React.useState(2)
  
  const ifCloseToTop = (nativeEvent: any) => {
    return nativeEvent.layoutMeasurement.height + nativeEvent.contentOffset.y >=
    nativeEvent.contentSize.height - 100;
  };

  function updateList({nativeEvent}: any){
    if (ifCloseToTop(nativeEvent)) {
      updateMovieList(favMovies)
    }
  }

  function updateMovieList (favStored:MovieObject[]){
    setPageNo(pageNo +1 )
    getAllMovies(pageNo + 1)
    .then(result => {
      if(result.total_pages > totalPages){
        setTotalPages(result.total_pages)
      }
      dispatch(GetMovies(changeOpj(result.results, favStored)))
    }
    )
  }

  function changeOpj (array: [], favStored:MovieObject[]){
    return array.map((m:any):MovieObject => {
      const favArray = favStored.filter(fm => fm.id == m.id)
      const Movie = {
        id : m.id,
        title : m.title,
        overview : m.overview,
        release_date : m.release_date,
        poster_path : m.poster_path,
        vote_average : m.vote_average,
        favorite: favArray.length > 0
      }
      
      return Movie
    })
  }

  React.useEffect(() => {
    let mount: boolean = true
    if(mount){
      let favRes:MovieObject[]
      getFavMovieData().then((res:MovieObject[] | undefined) => {
        if(typeof res != undefined){
          favRes = res != null ? res : []
          res != null
          ? dispatch(GetFavMovies([...res]))
          : dispatch(GetFavMovies([]))
        }
        
        console.log('resFav :>> ', res);
      })
      setTimeout(() => {
        updateMovieList(favRes)
      }, 0);
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
          allMovies.map(({id, title,overview, release_date, poster_path, vote_average, favorite}) => (
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
