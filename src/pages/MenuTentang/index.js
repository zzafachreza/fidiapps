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


export default function MenuTentang() {
  return (
    <SafeAreaView style={{
      flex: 1,
      padding: 10,
    }}>
      <Text style={{
        fontFamily: fonts.secondary[400],
        fontSize: fontScale * 20,
        marginVertical: 5,
        padding: 10,
        backgroundColor: colors.primary,
        color: colors.white
      }}>
        Profil Pengembang
      </Text>
      <View style={{
        justifyContent: 'center',
        alignItems: 'center'
      }}>

        <Image source={require('../../assets/pengembang.png')} style={{
          height: 150,
          aspectRatio: 1,
          resizeMode: 'contain'

        }} />
      </View>
      <View style={{
        borderBottomWidth: 1,
        borderBottomColor: colors.primary,
        paddingBottom: 5,
      }}>
        <Text style={{
          fontFamily: fonts.secondary[600],
          fontSize: fontScale * 20,
          color: colors.black
        }}>Nama</Text>
        <Text style={{
          fontFamily: fonts.secondary[400],
          fontSize: fontScale * 20,
          color: colors.black
        }}>Muhammad Nurshalim</Text>
      </View>
      <View style={{
        borderBottomWidth: 1,
        borderBottomColor: colors.primary,
        paddingBottom: 5,
      }}>
        <Text style={{
          fontFamily: fonts.secondary[600],
          fontSize: fontScale * 20,
          color: colors.black
        }}>NIM</Text>
        <Text style={{
          fontFamily: fonts.secondary[400],
          fontSize: fontScale * 20,
          color: colors.black
        }}>1808564</Text>
      </View>
      <View style={{
        borderBottomWidth: 1,
        borderBottomColor: colors.primary,
        paddingBottom: 5,
      }}>
        <Text style={{
          fontFamily: fonts.secondary[600],
          fontSize: fontScale * 20,
          color: colors.black
        }}>Prodi</Text>
        <Text style={{
          fontFamily: fonts.secondary[400],
          fontSize: fontScale * 20,
          color: colors.black
        }}>Pendidikan Kelautan dan Perikanan</Text>
      </View>
      <View style={{
        borderBottomWidth: 1,
        borderBottomColor: colors.primary,
        paddingBottom: 5,
      }}>
        <Text style={{
          fontFamily: fonts.secondary[600],
          fontSize: fontScale * 20,
          color: colors.black
        }}>Institusi</Text>
        <Text style={{
          fontFamily: fonts.secondary[400],
          fontSize: fontScale * 20,
          color: colors.black
        }}>Universitas Pendidikan Indonesia Kampus Daerah Serang
        </Text>
      </View>
      <View style={{
        borderBottomWidth: 1,
        borderBottomColor: colors.primary,
        paddingBottom: 5,
      }}>
        <Text style={{
          fontFamily: fonts.secondary[600],
          fontSize: fontScale * 20,
          color: colors.black
        }}>Email</Text>
        <Text style={{
          fontFamily: fonts.secondary[400],
          fontSize: fontScale * 20,
          color: colors.black
        }}>m.nurshalim24@upi.edu</Text>
      </View>
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({})