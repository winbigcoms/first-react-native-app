import React from 'react';
import {View,Text,StyleSheet}from 'react-native';
import BodyText from './BodyText';

const Header= ({title})=>{
  return (
    <View style={styles.header}>
      <BodyText>{title}</BodyText>
    </View>
  )
}

const styles = StyleSheet.create({
  header:{
    width : `100%`,
    height:90,
    paddingTop:36,
    backgroundColor:"skyblue",
    alignItems:'center',
    justifyContent:"center",
    fontFamily:"open-sans-bold"
  }
})

export default Header