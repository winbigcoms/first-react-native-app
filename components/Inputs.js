import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default function Inputs(props) {
  return (
    <TextInput {...props} style={styles.inputs} style={{...styles.inputs,...props.style}}/>
  );
}

const styles = StyleSheet.create({
  inputs: {
    height:30,
    borderBottomWidth:1,
    marginVertical:10
  },
});
