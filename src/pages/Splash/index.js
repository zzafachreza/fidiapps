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
import { fonts, fontScale } from '../../utils/fonts';
import { color, asin } from 'react-native-reanimated';
import { getData, storeData } from '../../utils/localStorage';
import { PermissionsAndroid } from 'react-native';


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
      navigation.replace('Beranda');
    }, 1500);

  }, []);

  return (
    <SafeAreaView style={styles.page}>
      <View
        style={{
          flex: 1,
          backgroundColor: colors.white,
          justifyContent: 'center',
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Animated.Image
            source={require('../../assets/logo.png')}
            style={{
              resizeMode: 'contain',
              height: 200,
              aspectRatio: scaleLogo,
            }}
          />
          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: fontScale * 50
          }}>FiDi Apps</Text>
          <Text style={{
            fontFamily: fonts.secondary[400],
            fontSize: fontScale * 25
          }}>Fishery Diversivication</Text>
        </View>

      </View>
    </SafeAreaView>
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
