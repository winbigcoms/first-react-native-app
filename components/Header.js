import React from 'react';
import {View,Text,StyleSheet}from 'react-native';

const Header= ({title})=>{
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header:{
    width : `100%`,
    height:90
  },
  headerTitle:{
    width:"10%"
  }
})

export default Header