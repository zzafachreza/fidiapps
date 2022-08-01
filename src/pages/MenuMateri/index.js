import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  Image,
  Animated,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { colors } from '../../utils/colors';
import { fonts, fontScale } from '../../utils/fonts';
import { color, asin } from 'react-native-reanimated';
import { getData, storeData } from '../../utils/localStorage';
import { PermissionsAndroid } from 'react-native';
import { MyButton } from '../../components';
import { Icon } from 'react-native-elements';



const __MenuList = ({ img, onPress, judul, icon }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.white,
      marginVertical: 2,
    }}>
      <Image source={img} style={{
        width: 50, height: 50
      }} />
      <Text style={{
        fontFamily: fonts.secondary[400],
        fontSize: fontScale * 30,
        left: 10,
        flex: 1,
      }}>{judul}</Text>
      <View style={{
        padding: 10,
      }}>
        <Icon type='ionicon' name={icon} color={colors.secondary} />
      </View>
    </TouchableOpacity>
  )
}


export default function MenuMateri({ navigation }) {
  return (
    <SafeAreaView style={{
      flex: 1,
      paddingHorizontal: 10,
    }}>


      <Text style={{
        fontFamily: fonts.secondary[400],
        fontSize: fontScale * 20,
        marginVertical: 5,
        padding: 10,
        backgroundColor: colors.primary,
        color: colors.white
      }}>
        MATERI TULISAN
      </Text>

      <__MenuList onPress={() => navigation.navigate('MenuMateri1')} judul="Surimi" img={require('../../assets/m1.png')} icon="file-tray-stacked" />
      <__MenuList onPress={() => navigation.navigate('MenuMateri2')} judul="Nugget Ikan" img={require('../../assets/m2.png')} icon="file-tray-stacked" />
      <__MenuList onPress={() => navigation.navigate('MenuMateri3')} judul="Bakso Ikan" img={require('../../assets/m3.png')} icon="file-tray-stacked" />
      <__MenuList onPress={() => navigation.navigate('MenuMateri4')} judul="Sosis Ikan" img={require('../../assets/m4.png')} icon="file-tray-stacked" />

      <Text style={{
        fontFamily: fonts.secondary[400],
        fontSize: fontScale * 20,
        marginVertical: 10,
        padding: 10,
        backgroundColor: colors.primary,
        color: colors.white
      }}>
        MATERI VIDIO
      </Text>
      <__MenuList onPress={() => navigation.navigate('MenuMateriVidio', {
        url: 'suHyg7jOd7k'
      })} judul="Surimi" img={require('../../assets/m1.png')} icon="logo-youtube" />
      <__MenuList onPress={() => navigation.navigate('MenuMateriVidio', {
        url: 'IIDpzr_K9iE'
      })} judul="Nugget Ikan" img={require('../../assets/m2.png')} icon="logo-youtube" />
      <__MenuList onPress={() => navigation.navigate('MenuMateriVidio', {
        url: 'Lb2SZoE2I-s'
      })} judul="Bakso Ikan" img={require('../../assets/m3.png')} icon="logo-youtube" />
      <__MenuList onPress={() => navigation.navigate('MenuMateriVidio', {
        url: '7eydJO18GvA'
      })} judul="Sosis Ikan" img={require('../../assets/m4.png')} icon="logo-youtube" />
      <Text style={{
        fontFamily: fonts.secondary[400],
        fontSize: fontScale * 20,
        marginVertical: 10,
        padding: 10,
        backgroundColor: colors.primary,
        color: colors.white
      }}>
        MATERI VIDIO DOKUMENTASI
      </Text>
      <__MenuList onPress={() => navigation.navigate('MenuMateriVidio', {
        url: '_zfOnca-pwA'
      })} judul="Dokumentasi Pribadi" img={require('../../assets/m5.png')} icon="logo-youtube" />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})