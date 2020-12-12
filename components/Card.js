import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card =(props)=>{
  return (
    <View style={{...stlyes.card,...props.style}}>
      {props.children}
    </View>
  )
}

const stlyes = StyleSheet.create({
  card:{
    shadowColor:'#333',
    shadowOffset:{
      width:0,height:2
    },
    shadowRadius:6,
    shadowOpacity:0.3,
    backgroundColor:'#fff',
    elevation:8,
    padding:20,
    borderRadius : 10
  }
})

export default Card