import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import Color from '../constants/colors';

const CustomBtn = props => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={props.customPress}>
      <View style ={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  )
};
const styles = StyleSheet.create({
  button:{
    backgroundColor:Color.purple,
    paddingVertical:12,
    paddingHorizontal:30,
    borderRadius:25
  },
  buttonText:{
    color: "white",
    fontFamily:"open-sans",
    fontSize:12
  }
});

export default CustomBtn