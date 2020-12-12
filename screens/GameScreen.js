import React, { useEffect, useRef, useState } from 'react'
import {Button,Text, StyleSheet, View, Alert} from 'react-native';
import Card from '../components/Card';
import NumberContainer from '../components/number';

const generateRandom = (min,max,exclude)=>{
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random()*(max-min)+min);
  if(rndNum === exclude){
    return generateRandom(min,max,exclude);
  }else{
    return rndNum
  }
}

const GameScreen = props => {
  const [currentGuess, setGuess] = useState(generateRandom(1,100,props.choice));
  const [round, setRound] = useState(0)
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const {choice,onGameOver} = props;
  useEffect(() => {
    if(currentGuess === choice){
      onGameOver(round);
    }
  }, [currentGuess,choice,onGameOver])

  const nextGuessHandler = direction=>{
    if((direction === 'lower' && currentGuess < props.choice)||(direction === 'greater' && currentGuess > props.choice)){
      Alert.alert("error!, you wrong",[{
        text:'Sorry!',
        style:'cancel'
      }])
      return
    };
    if(direction === 'lower'){
      currentHigh.current = currentGuess
    }else{
      currentLow.current = currentGuess
    };
    const nextNum = generateRandom(currentLow.current,currentHigh.current,currentGuess);
    setGuess(nextNum);
    setRound(state=>state+1);
  }
  return (
    <View style={styles.screen}>
      <Text>Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <Button onPress={nextGuessHandler.bind(this,'lower')} title="lower"/>
        <Button onPress={nextGuessHandler.bind(this,'greater')} title="greater"/>
      </Card>
    </View>
  )
}

const styles= StyleSheet.create({
  screen:{
    flex:1,
    padding:10,
    alignItems:"center"
  },
  buttonContainer:{
    flexDirection:"row",
    justifyContent:"space-around",
    marginTop:20,
    width:300,
    maxWidth:'80%'
  }
});

export default GameScreen