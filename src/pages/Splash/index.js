import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  Image,
  Animated,
} from 'react-native';
import { colors } from '../../utils/colors';
import { fonts, fontScale, windowWidth } from '../../utils/fonts';
import { color, asin } from 'react-native-reanimated';
import { getData, storeData } from '../../utils/localStorage';
import { PermissionsAndroid } from 'react-native';
import { StatusBar } from 'react-native';


export default function Splash({ navigation }) {
  const scaleLogo = new Animated.Value(0.1);
  const scaleText = new Animated.Value(100);

  Animated.timing(scaleLogo, {
    toValue: 1,
    duration: 1000,
  }).start();

  Animated.timing(scaleText, {
    toValue: 0,
    duration: 1000,
  }).start();


  useEffect(() => {


    setTimeout(() => {
      navigation.replace('Utama');
    }, 3000);

  }, []);

  return (
    <ImageBackground source={require('../../assets/back.png')} style={styles.page}>

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: windowWidth / 10,
          }}>
          <Animated.Image
            source={require('../../assets/upi.png')}
            style={{
              resizeMode: 'contain',
              height: 200,
              aspectRatio: scaleLogo,
            }}
          />

          <Text style={{
            marginTop: '10%',
            fontFamily: fonts.secondary[600],
            fontSize: fontScale * 25,
            color: colors.white,
            textAlign: 'center'
          }}>Pendidikan Kelautan dan Perikanan Universitas Pendidikan Indonesia Kampus Daerah Serang
          </Text>
        </View>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  image: {
    aspectRatio: 1,
    width: 250,
    height: 250,
  },
});
