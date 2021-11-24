import { FontAwesome } from '@expo/vector-icons';
import React from 'react'
import { View, StyleSheet, Text } from "react-native";

export default function Rating(){
  return(
    <View style={styles.rate}>
      <FontAwesome name="star" size={14} style={styles.star} />
      <Text style={styles.rateText}>7.9</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  rate: {
    backgroundColor: "yellow",
    width: '60px',
    borderRadius: 5,
    position: 'absolute',
    right: 10,
    top: 150,
    borderColor: 'black',
    borderWidth: 1,
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