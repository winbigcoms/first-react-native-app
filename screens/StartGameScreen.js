import React,{useState} from 'react';
import {View,StyleSheet,Text, TextInput,Alert, Button, TouchableNativeFeedback,Keyboard} from 'react-native'
import BodyText from '../components/BodyText';
import Card from '../components/Card';
import Inputs from '../components/Inputs';
import NumberContainer from '../components/number';
import color from '../constants/colors'
const StartGameScreen = ({onStart})=>{
  const [enterValue, setEnterValue] = useState("");
  const [confirmed, setConfirmedState] = useState(false);
  const [selectNumber, setSelectNumber] = useState();


  const enterValueHandler = text=>{
    setEnterValue(state=>text.replace(/[^0-9]/g,''));
  }

  const resetInputHandler = ()=>{
    setEnterValue(state=>"");
  }
  const confirmInputHandler = ()=>{
    const choseNum = parseInt(enterValue);
    if(isNaN(choseNum)||choseNum<=0||choseNum>99){
      Alert.alert("숫자가 아니에여..","0 이상을 쓰라구요",[{text:"Okay",style:'destructive',onPress:resetInputHandler}])
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
      <Button title="start Game" onPress={()=>{onStart(selectNumber)}}/>
    </Card>
    )
  }

  return (
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
            <View style={Styles.button} >
              <Button title="reset" onPress={resetInputHandler} color={color.purple} />
            </View>
            <View style={Styles.button}>
              <Button title="confirm" onPress={confirmInputHandler} color={color.smoothBlue}/>
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableNativeFeedback>
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
    width: 300,
    maxWidth:`80%`,
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
    width:`40%`
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