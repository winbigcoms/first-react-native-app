import React from 'react';
import {View,Text, StyleSheet, Button} from 'react-native';

const GameOver = ({roundNumber,userNumber,restart})=>{
  return (
    <View style={styles.screen}>
      <Text>GameOver</Text>
      <Text>round:{roundNumber}</Text>
      <Text>num:{userNumber}</Text>
      <Button title="restart!" onPress={restart}/>
    </View>
  )
}

const styles = StyleSheet.create({
  screen:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
})

export default GameOver;
