import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { MovieCard } from '../components'
import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import movies from './movies.json'

export default function Home({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {
          movies.map(({id, title,overview, release_date, poster_path, vote_average}) => (
            <MovieCard
              key={id}
              id = {id}
              title = {title}
              overview = {overview}
              releaseDate = {release_date}
              poster = {poster_path}
              rating = {vote_average}
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
