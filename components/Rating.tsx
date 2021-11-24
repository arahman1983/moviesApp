import React from 'react'
import { View, StyleSheet, Text } from "react-native";

export default function Rating(){
  return(
    <View style={styles.rate}>
      <Text style={{fontSize: 20}}>*</Text>
      <Text style={styles.rateText}>7.9</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  rate: {
    backgroundColor: "yellow",
    width: '50px',
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
    color: 'Black',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center'
  }
})