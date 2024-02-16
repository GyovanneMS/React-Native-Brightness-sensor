import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView, Image } from 'react-native';
import { LightSensor } from 'expo-sensors';

export default function App() {

  const [{illuminance}, definirIluminacao] = useState({illuminance: 0})

  useEffect(function(){
    LightSensor.addListener(definirIluminacao)
  }, [])

  function VerificarLuz(escuro, claro){
    return illuminance > 20 ? escuro : claro
  }
//https://images.app.goo.gl/xkdbUpdq6JnhViSWA
  return <ScrollView
    style = {{backgroundColor: VerificarLuz("#FFFBEB", "#20262#")}}>
    <StatusBar barStyle={VerificarLuz("dark-content", "light-content")} backgroundColor={VerificarLuz("#FFFBEB", "#000000")}/>
    <View>
      <Text>Sensor do Smartphone!!!</Text>

      <Text>Testestando iluminação do ambiente!</Text>

      <Text> {illuminance} </Text>

      <Image 
        source={{uri: VerificarLuz("https://static.todamateria.com.br/upload/15/83/1583748930ic5e661742ed9ab-og.jpg?class=ogImageWide", "https://www.reddit.com/media?url=https%3A%2F%2Fi.redd.it%2Fnl1j7k2821vb1.jpeg&rdt=39218")}}
        style={{height: 200}}
      />



    </View>




  </ScrollView>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
