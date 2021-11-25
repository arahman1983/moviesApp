import { FontAwesome } from '@expo/vector-icons';
import React, {useState} from 'react';
import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import { MovieObject } from '../constants/moviesType';
import Rating from './Rating'

export default function MovieCard  ({id, title, overview, release_date, poster_path, vote_average, favorite}: MovieObject){
  const [active, setActive] = useState<boolean>(false)
  
  const ToggleActive = () => {
    setActive(!active)
  }

  return(
    
      <View style={styles.card}>
        <Image 
                style={styles.background} 
                source={{uri: `https://image.tmdb.org/t/p/w500${poster_path}`}}
            />
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>
              {
              title.length > 30
              ? `${title.substring(0,30)} ...`
              : title
              }
          </Text>
            <Text style={styles.date}>{release_date}</Text>
          </View>
          <Pressable 
            style={styles.favToggle}
            onPress={ToggleActive}>
            {
              active 
              ? <FontAwesome name="heart" style={styles.icon} />
              : <FontAwesome name="heart-o" style={styles.iconO} />
            }

          </Pressable>
        </View>
        <View style={styles.mainPhoto}>
            <Rating rate={vote_average} />
            <Image 
                style={styles.image} 
                source={{uri: `https://image.tmdb.org/t/p/w500${poster_path}`}}
            />
        </View>

        <View style={styles.overViewContainer}>
          <Text style={styles.overView}>
            {
              overview.length > 90
              ? `${overview.substring(0,90)} ...`
              : overview
            }
          </Text>
        </View>

      </View>
    
  )
}


const styles = StyleSheet.create({
  card:{
    backgroundColor:"#000",
    width: '90%',
    height: '300px',
    borderRadius: 10,
    margin: 20,
    overflow: 'hidden'
  },
  background:{
    width: '100%',
    height: '300px',
    opacity: 0.4,
    position: 'absolute',
    top:0,
    left:0,
    zIndex:0
  },
  title: {
    fontSize: 20,
    color: '#FFF',
  },
  icon:{
    color: 'red',
    fontSize: 16
  },
  iconO:{
    color: 'gray',
    fontSize: 16
  },
  favToggle: {
    width:30,
    height:30,
    padding:5,
    backgroundColor: 'black',
  },
  date:{
    color: '#FFF',
    fontSize: 10,
    marginTop:5
  },
  header: {
    padding: 10,
    height: 65,
    backgroundColor: 'rgba(0,0,0,0.5)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex:2
  },
  mainPhoto:{
    width:'100%',
    height: 160,
  },
  image: {
    height: '100%',
    width: '100%',
    top: 0,
    resizeMode: 'contain',
    zIndex: 0
  },
  overViewContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.6)'
  },
  overView:{
    zIndex:1,
    color: '#FFF',
    padding:20,
    bottom: 0
  },
});
