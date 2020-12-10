import React from 'react';
import {View,StyleSheet,Text, TextInput, Button} from 'react-native'
import Card from '../components/Card';
import color from '../constants/colors'
const StartGameScreen = ({})=>{
  return (
    <View style={Styles.screen}>
      <Text style= {Styles.title}>게임을 시작하지</Text>
      <Card style = {Styles.inpuContainer}>
        <Text>숫자를 선택해보시지</Text>
        <TextInput style={Styles.input}/>
        <View style={Styles.buttonContainer}>
          <View style={Styles.button} >
            <Button title="up" onPress={()=>{}} color={color.purple}/>
          </View>
          <View style={Styles.button}>
            <Button title="down" onPress={()=>{}} color={color.smoothBlue}/>
          </View>
        </View>
      </Card>
    </View>
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
    marginVertical: 10
  },
  inpuContainer:{
    width: 300,
    maxWidth:`80%`,
    alignItems:"center",
    justifyContent:"center",
    shadowColor:'#333',
    shadowOffset: {
      width:0,
      height:2
    },
    shadowRadius:6,
    shadowOpacity:0.3,
    backgroundColor:'#fff',
    elevation:8,
    padding:20,
    borderRadius : 10
  },
  input:{
    borderWidth:1,
    width:200,
    paddingHorizontal:15
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
  }
});

export default StartGameScreen;