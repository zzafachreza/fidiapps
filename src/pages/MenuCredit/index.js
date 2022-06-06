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


export default function MenuCredit() {
  return (
    <SafeAreaView style={{
      flex: 1,
      padding: 10,
    }}>

      <View style={{
        flexDirection: 'row'
      }}>

        <Image source={require('../../assets/cr1.png')} style={{
          height: 150,
          aspectRatio: 1,
          resizeMode: 'contain'

        }} />

        <View style={{
          flex: 1
        }}>
          <View style={{
            borderBottomWidth: 1,
            borderBottomColor: colors.primary,
            paddingBottom: 5,
          }}>
            <Text style={{
              fontFamily: fonts.secondary[600],
              fontSize: fontScale * 20,
              color: colors.black
            }}>Nama Modul</Text>
            <Text style={{
              fontFamily: fonts.secondary[400],
              fontSize: fontScale * 20,
              color: colors.black
            }}>
              Membuat Diversifikasi Produk Hasil
              Perikanan (Teknologi Pengolahan
              Hasil Perikanan)

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
            }}>Penulis</Text>
            <Text style={{
              fontFamily: fonts.secondary[400],
              fontSize: fontScale * 20,
              color: colors.black
            }}>Pusat Pendidikan Kelautan dan
              Perikanan</Text>
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
            }}>Penerbit</Text>
            <Text style={{
              fontFamily: fonts.secondary[400],
              fontSize: fontScale * 20,
              color: colors.black
            }}>Pusat Pendidikan Kelautan dan
              Perikanan</Text>
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
            }}>Tahun Terbit</Text>
            <Text style={{
              fontFamily: fonts.secondary[400],
              fontSize: fontScale * 20,
              color: colors.black
            }}>2015
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
            }}>Kota Terbit</Text>
            <Text style={{
              fontFamily: fonts.secondary[400],
              fontSize: fontScale * 20,
              color: colors.black
            }}>Jakarta</Text>
          </View>
        </View>
      </View>


      {/* CREDIT 2 */}

      <View style={{
        flexDirection: 'row',
        marginTop: 10,
      }}>

        <Image source={require('../../assets/cr2.png')} style={{
          height: 150,
          aspectRatio: 1,
          resizeMode: 'contain'

        }} />

        <View style={{
          flex: 1
        }}>
          <View style={{
            borderBottomWidth: 1,
            borderBottomColor: colors.primary,
            paddingBottom: 5,
          }}>
            <Text style={{
              fontFamily: fonts.secondary[600],
              fontSize: fontScale * 20,
              color: colors.black
            }}>Nama Modul</Text>
            <Text style={{
              fontFamily: fonts.secondary[400],
              fontSize: fontScale * 20,
              color: colors.black
            }}>
              Pengolahan Diversifikasi Hasil Perikanan

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
            }}>Penulis</Text>
            <Text style={{
              fontFamily: fonts.secondary[400],
              fontSize: fontScale * 20,
              color: colors.black
            }}>Direktorat Pembinaan Sekolah Menengah
              Kejuruan Kementrian Pendidikan dan
              Kebudayaan Republik Indonesia & Tim
              Buku Sekolah Elektronik (BSE) </Text>
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
            }}>Penerbit</Text>
            <Text style={{
              fontFamily: fonts.secondary[400],
              fontSize: fontScale * 20,
              color: colors.black
            }}> Direktorat Pembinaan SMK Kemendikbud
              RI & Buku Sekolah Elektronik (BSE)
            </Text>
          </View>


        </View>
      </View>
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({})