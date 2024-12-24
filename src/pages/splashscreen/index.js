import { StyleSheet, Text, View, Image,TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { BackgroundSpalash, ImageSplashScreen } from '../../assets/images'
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground source={BackgroundSpalash} style={styles.backgroundSpalash}>
          <View>
              <Image source={ImageSplashScreen} style={{width: 200, height: 200}} />
          </View>
          <View>
              <Text style={{ fontSize: 24, color:"white", fontWeight:'bold',width:208,textAlign:'center',marginBottom:20 }}>
                Coffee so good, your taste buds will love it
              </Text> 
          </View>
          <View>
              <Text style={{ fontSize:14,fontWeight:'normal',width:220,textAlign:'center',color:'white',marginBottom:40 }}>
                The best grain, the finest roas, the most powerful flavor.
              </Text>
          </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MyTabs')}>
                <Text style={{ color: 'white', fontSize: 18 }}>Get Started</Text>
            </TouchableOpacity>
        </ImageBackground>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundSpalash: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    alignItems: 'center',
    textAlign: 'center',
    paddingHorizontal: 42,
    paddingVertical: 16,
    borderRadius: 30,
    backgroundColor: '#00512C',
  }
})