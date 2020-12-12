import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import GameOver from './screens/GameOver';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading'

const fetchFonts = ()=>{
  return Font.loadAsync({
    'open-sans':require("./assets/fonts/OpenSans-Regular.ttf"),
    'open-sans-bold':require("./assets/fonts/OpenSans-Bold.ttf")
  })
}

export default function App() {
  const [userNumber,setUserNum] = useState();
  const [guessRound, setGuessRound] = useState(0);
  const [dataLoad, setDataLoad] = useState(false);

  if(!dataLoad){
    return (<AppLoading 
      startAsync={fetchFonts} 
      onFinish={()=>{setDataLoad(state=>true)}} 
      onError={err=>console.log(err)}
    />)
  }


  const configNewGameHandler=()=>{
    setGuessRound(0);
    setUserNum(null);
  }
  const startGameHandler = selectNum =>{
    setUserNum(state=>selectNum);
    setGuessRound(0);
  }
  const gameOverHandler = numOfRound =>{
    setGuessRound(numOfRound);
  }

  let content = <StartGameScreen onStart={startGameHandler}/>

  if(userNumber && guessRound<=0){
    content = <GameScreen choice={userNumber} onGameOver={gameOverHandler}/>
  }else if(guessRound >0){
    content = <GameOver roundNumber={guessRound} userNumber={userNumber} restart={configNewGameHandler}/>
  }
  return (
    <View style={styles.container}>
      <Header title="안녕"/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
