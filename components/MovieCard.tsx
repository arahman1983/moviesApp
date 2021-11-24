import { FontAwesome } from '@expo/vector-icons';
import React, {useState} from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Rating from './Rating'

export default function MovieCard  (){
  const overView = "Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help. The mission to rescue a kidnapped scientist turns out to be far more treacherous than expected, leading Bond onto the trail of a mysterious villain armed with dangerous new technology."
  const [active, setActive] = useState<boolean>(false)
  
  const ToggleActive = () => {
    setActive(!active)
  }

  return(
    
      <View style={styles.card}>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Clifford the Big Red Dog</Text>
            <Text style={styles.date}>2021-09-29</Text>
          </View>
          <TouchableOpacity 
            style={styles.favToggle}
            onPress={ToggleActive}>
            {
              active 
              ? <FontAwesome name="heart" style={styles.icon} />
              : <FontAwesome name="heart-o" style={styles.iconO} />
            }

          </TouchableOpacity>
        </View>
        <View style={styles.mainPhoto}>
            <Rating />
            <Image 
                style={styles.image} 
                source={{uri: `https://image.tmdb.org/t/p/w500/dK12GIdhGP6NPGFssK2Fh265jyr.jpg`}}
            />
        </View>

        <View style={styles.overViewContainer}>
          <Text style={styles.overView}>{overView.substring(0,150)} ...</Text>
        </View>

      </View>
    
  )
}


const styles = StyleSheet.create({
  card:{
    backgroundColor: "#000",
    width: '90%',
    height: '300px',
    borderRadius: 10,
    margin: 20,
    overflow: 'hidden'
  },
  title: {
    fontSize: 20,
    color: '#FFF'
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
    backgroundColor: 'rgba(0,0,0,0.2)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1
  },
  mainPhoto:{
    width:'100%',
    height: '100%'
  },
  image: {
    flex: 1,
    width: '100%',
    top: 0,
    resizeMode: 'contain',
    zIndex: 0
  },
  overViewContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.8)'
  },
  overView:{
    zIndex:1,
    color: '#FFF',
    padding:20,
    bottom: 0
  },
});
