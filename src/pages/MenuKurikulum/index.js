import React, { useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    SafeAreaView,
    Image,
    Animated,
    ImageBackground
} from 'react-native';
import { colors } from '../../utils/colors';
import { fonts, fontScale, windowWidth } from '../../utils/fonts';
import { color, asin } from 'react-native-reanimated';
import { getData, storeData } from '../../utils/localStorage';
import { PermissionsAndroid } from 'react-native';
import { MyButton } from '../../components';

export default function MenuKurikulum({ navigation }) {
    return (
        <ImageBackground source={require('../../assets/back.png')} style={{
            flex: 1,
        }}>
            <View style={{
                // justifyContent: 'center',
                alignItems: 'center',
                flex: 1
            }}>
                <Image
                    source={require('../../assets/buku.png')}
                    style={{
                        height: 100,
                        aspectRatio: 1,
                    }}
                />

                <Text style={{
                    fontFamily: fonts.secondary[600],
                    textAlign: 'center',
                    fontSize: windowWidth / 25,
                    maxWidth: '70%',
                    marginVertical: 20,
                    lineHeight: 20,
                    color: colors.white
                }}>Kurikulum yang digunakan adalah kurikulum 2013</Text>

                <Text style={{
                    fontFamily: fonts.secondary[400],
                    lineHeight: 20,
                    textAlign: 'center',
                    color: colors.white,
                    fontSize: windowWidth / 25,
                    maxWidth: '70%',
                    marginVertical: 20
                }}>Kurikulum 2013 (K-13) adalah kurikulum yang berlaku dalam Sistem Pendidikan Indonesia. Kurikulum ini merupakan kurikulum tetap diterapkan oleh pemerintah untuk menggantikan Kurikulum-2006 (yang sering disebut sebagai Kurikulum Tingkat Satuan Pendidikan) yang telah berlaku selama kurang lebih 6 tahun. Kurikulum 2013 masuk dalam masa percobaannya pada tahun 2013 dengan menjadikan beberapa sekolah menjadi sekolah rintisan.</Text>
                <Image source={require('../../assets/tutwuri.png')} style={{

                    resizeMode: 'contain',
                    height: 60,
                }} />

                <Image source={require('../../assets/org2.png')} style={{

                    width: 150,
                    left: 0,
                    height: 200,
                    position: 'absolute',
                    bottom: 0,
                }} />

            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({})