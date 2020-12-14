import React from 'react';
import {View,Text,StyleSheet,Platform}from 'react-native';
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
    backgroundColor:Platform.OS==="android"?"blue":"skyblue",
    borderBottomColor:Platform.OS==="ios"?"#ccc":"transparent",
    borderBottomWidth:Platform.OS==="ios"?1:0,
    alignItems:'center',
    justifyContent:"center",
    fontFamily:"open-sans-bold"
  }
})

export default Header