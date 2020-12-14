import React, { useEffect, useRef, useState } from 'react'
import {Button,Text, StyleSheet, View, Alert, ScrollView, FlatList,Dimensions} from 'react-native';
import Card from '../components/Card';
import NumberContainer from '../components/number';
import CustomBtn from '../components/CustomBtn';
import {Ionicons} from '@expo/vector-icons';
import BodyText from '../components/BodyText';
import {ScreenOrientation} from 'expo'

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

const renderListItem =(listLength,round)=>(
  <View key={round.index} style={styles.listItem}>
    <BodyText>#{listLength-round.index}</BodyText>
    <BodyText>
      {round.item}
    </BodyText>
  </View>
)

const GameScreen = props => {
  const initGuess = generateRandom(1,100,props.choice)
  const [currentGuess, setGuess] = useState(initGuess);
  const [pastRound, setPastRound] = useState([initGuess.toString()])
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const {choice,onGameOver} = props;
  useEffect(() => {
    if(currentGuess === choice){
      onGameOver(pastRound.length);
    }
    return ()=>{
      
    }
  }, [currentGuess,choice,onGameOver])

  const nextGuessHandler = direction=>{
    if((direction === 'lower' && currentGuess < props.choice)||(direction === 'greater' && currentGuess > props.choice)){
      Alert.alert("error!", "you wrong",[{
        text:'Sorry!',
        style:'cancel'
      }])
      return
    };
    if(direction === 'lower'){
      currentHigh.current = currentGuess
    }else{
      currentLow.current = currentGuess + 1
    };
    const nextNum = generateRandom(currentLow.current,currentHigh.current,currentGuess);
    setGuess(nextNum);
    setPastRound(state=>[nextNum.toString(),...state]);
  };

  return (
    <View style={styles.screen}>
      <Text>Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <CustomBtn customPress={nextGuessHandler.bind(this,'lower')} >
          <Ionicons name={"md-remove"} size={25} color="white" />
        </CustomBtn>
        <CustomBtn customPress={nextGuessHandler.bind(this,'greater')}>
          <Ionicons name={"md-add"} size={25} color="white" />
        </CustomBtn>
      </Card>
      <View style={styles.listContainer}>
        {/* <ScrollView contentContainerStyle={styles.list}>
          {pastRound.map((round,idx)=>renderListItem(round,idx))}
        </ScrollView> */}
        <FlatList 
          keyExtractor={item=>item} 
          data={pastRound} 
          renderItem={renderListItem.bind(this,pastRound.length)}
          contentContainerStyle={styles.list}
        />
      </View>
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
    marginTop:Dimensions.get("window").height > 600 ? 30 : 5,
    width:300,
    maxWidth:'80%'
  },
  listItem:{
    borderColor:'#ccc',
    padding:15,
    marginVertical:10,
    backgroundColor:'white',
    borderWidth:1,
    flexDirection:"row",
    justifyContent:"space-around",
    width: "100%"
  },
  listContainer:{
    flex:1, 
    width:Dimensions.get('window').width>500? `60%`:'70%',
  },
  bigListContainer:{
    flex:1,
    width:`80%`
  },
  list:{
    flexGrow:1,
    justifyContent:'flex-start',
    flexGrow:1,
    // flexDirection:'column-reverse'
  }
});

export default GameScreen