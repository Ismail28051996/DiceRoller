import React, {useState} from 'react';

import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
} from 'react-native';

import Diceone from './assets/dice1.png';
import DiceTwo from './assets/dice2.png';
import DiceThree from './assets/dice3.png';
import DiceFour from './assets/dice4.png';
import DiceFive from './assets/dice5.png';
import DiceSix from './assets/dice6.png';
// import { useState } from 'react';

const App = () => {
//const uri = DiceSix;
  const [uri, setUri] = useState(Diceone);

  const PlayButton = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch(randomNumber){
      case 1:
        setUri(Diceone);
        break;
        case 2:
        setUri(DiceTwo);
        break;
        case 3:
        setUri(DiceThree);
        break;
        case 4:
        setUri(DiceFour);
        break;
        case 5:
        setUri(DiceFive);
        break;
        case 6:
        setUri(DiceSix);
        break;

        default:
          setUri(DiceSix);
          break;
    }
  }



  return (
    <>
      <View style={styles.container}>
        <Image style={styles.image} source={uri}/>
        <Pressable onPress ={PlayButton}>
          <Text style={styles.gamePlay}>Play Game</Text>
        </Pressable> 
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container : {
    flex: 1, 
    backgroundColor: "teal",
    alignItems: "center",
    justifyContent: "center",
  },
  image : {
    height: 200,
    width: 200,
  },
  gamePlay:{
    fontSize: 20,
    marginTop:30,
    color:"#F2A365",
    paddingHorizontal:45,
    paddingVertical: 20,
    borderColor:"#30475E",
    borderRadius:5,
    borderWidth:3,
    fontWeight:"bold",
    }
});