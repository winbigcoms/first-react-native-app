import React from 'react';
import {View,Text, StyleSheet, Button, Image,Dimensions} from 'react-native';
import BodyText from '../components/BodyText'
import color from '../constants/colors'
import CustomBtn from '../components/CustomBtn';

const GameOver = ({roundNumber,userNumber,restart})=>{
  return (
    <View style={styles.screen}>
      <BodyText>GameOver</BodyText>
      <View style={styles.imageContainer}>
        <Image 
          fadeDuration={300}
          source={require("../assets/success.png")} 
          style={styles.image} 
          resizeMode="cover"
        />
      </View>
      <BodyText style={styles.resultText}>round:<Text style={styles.highLight}>{roundNumber}</Text></BodyText>
      <BodyText>num:{userNumber}</BodyText>
      <CustomBtn customPress={restart}>ReStart</CustomBtn>
    </View>
  )
}

const styles = StyleSheet.create({
  screen:{
    flex:1, 
    justifyContent:"center",
    alignItems:"center",
    paddingVertical:10
  },
  image:{
    width:'100%',
    height:"100%",
  },
  imageContainer:{
    width:Dimensions.get("window").width*0.7,
    height:Dimensions.get("window").width *0.7,
    borderRadius:Dimensions.get("window").width * 0.35,
    borderColor:'black',
    borderWidth:3,
    overflow:"hidden",
    marginVertical:Dimensions.get("window").height/20
  },
  highLight:{
    color:color.smoothBlue
  },
  resultText:{
    textAlign:'center',
    fontSize:Dimensions.get('window').height < 400 ? 16 : 20
  }
})

export default GameOver;
