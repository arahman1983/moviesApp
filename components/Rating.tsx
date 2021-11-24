import { FontAwesome } from '@expo/vector-icons';
import React from 'react'
import { View, StyleSheet, Text } from "react-native";

interface Rate{
  rate: number
}

export default function Rating({rate}: Rate){
  return(
    <View style={styles.rate}>
      <FontAwesome name="star" size={14} style={styles.star} />
      <Text style={styles.rateText}>{rate}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  rate: {
    backgroundColor: "yellow",
    width: '60px',
    borderRadius: 5,
    position: 'absolute',
    right: 20,
    bottom: 15,
    shadowOffset:{width:60, height: 15},
    shadowColor: '#000',
    shadowOpacity: 0.8,
    flexDirection: 'row',
    justifyContent: 'center',
    zIndex: 2
  },
  rateText:{
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center'
  },
  star: {
    color: 'black',
    marginEnd: 2,
    marginTop: 5
  }
})