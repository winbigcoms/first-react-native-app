import React,{useEffect, useState} from 'react';
import {View,StyleSheet,Text, TextInput,Alert,KeyboardAvoidingView, Button, TouchableNativeFeedback,Keyboard, Dimensions, ScrollView} from 'react-native'
import BodyText from '../components/BodyText';
import Card from '../components/Card';
import Inputs from '../components/Inputs';
import NumberContainer from '../components/number';
import color from '../constants/colors'
import CustomBtn from '../components/CustomBtn';

const StartGameScreen = ({onStart})=>{
  const [enterValue, setEnterValue] = useState("");
  const [confirmed, setConfirmedState] = useState(false);
  const [selectNumber, setSelectNumber] = useState();
  const [buttonWidth, setButtonWidth] = useState(Dimensions.get('window').width/4);
  


  const enterValueHandler = text=>{
    setEnterValue(state=>text.replace(/[^0-9]/g,''));
  }

  const resetInputHandler = ()=>{
    setEnterValue(state=>"");
    setConfirmedState(false);
  }

  useEffect(()=>{
    const updateLayout=()=>{
      setButtonWidth(Dimensions.get('window').width/4)
    }
    Dimensions.addEventListener('change',updateLayout);
    return ()=>{
      Dimensions.removeEventListener('change',updateLayout);
    }
  })

  const confirmInputHandler = ()=>{
    const choseNum = parseInt(enterValue);
    if(isNaN(choseNum)||choseNum<=0||choseNum>99){
      console.log("s")
      Alert.alert(
        "it is not num",
        "over 0 please",
        [{text:"Okay",style:'destructive',onPress:resetInputHandler}]
      );
      return;
    }
    setConfirmedState(true);
    setSelectNumber(state=> choseNum);
    setEnterValue(state=>"");
    Keyboard.dismiss();
  }
  let confirmedOutput;
  if(confirmed){
    confirmedOutput = (
    <Card style={Styles.summeryContainer}>
      <Text>you select</Text>
      <NumberContainer>{selectNumber}</NumberContainer>
      <CustomBtn customPress={()=>{onStart(selectNumber)}}>
        start game
      </CustomBtn>
    </Card>
    )
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>  
       <TouchableNativeFeedback onPress={()=>{Keyboard.dismiss()}}>
      <View style={Styles.screen}>
        <Text style= {Styles.title}>게임을 시작하지</Text>
        <Card style = {Styles.inpuContainer}>
          <BodyText>숫자를 선택해!</BodyText>
          <Inputs style={Styles.input} 
            blurOnSubmit 
            autoCapitalize='none' 
            autoCorrect={false}
            keyboardType='number-pad'
            maxLength={2}
            onChangeText={enterValueHandler}
            value={enterValue}
          />
          <View style={Styles.buttonContainer}>
            <View style={{width:buttonWidth}} >
              <Button title="reset" onPress={resetInputHandler} color={color.purple} />
            </View>
            <View style={{width:buttonWidth}} >
              <Button title="confirm" onPress={confirmInputHandler} color={color.smoothBlue}/>
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableNativeFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

const Styles = StyleSheet.create({
  screen:{
    flex:1,
    padding: 10,
    alignItems:"center",
  },
  title:{
    fontSize:20,
    marginVertical: 10,
    fontFamily:"open-sans-bold"
  },
  inpuContainer:{
    width: "80%",
    minWidth:300,
    alignItems:"center",
  },
  input:{
    borderWidth:1,
    width:200,
    paddingHorizontal:15,
    textAlign:"center"
  },
  buttonContainer:{
    flexDirection:'row',
    width:"100%",
    justifyContent:'space-between',
    paddingHorizontal:15,
    marginVertical:10
  },
  button:{
    width:`40%`,
    width:Dimensions.get('window').width / 4
  },
  chosen:{
    color:`red`
  },
  summeryContainer:{
    marginTop:20,
    alignItems:"center",
  },
  text:{
    fontFamily:"open-sans-bold"
  }
});

export default StartGameScreen;