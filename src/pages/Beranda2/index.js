import React, { useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    SafeAreaView,
    ImageBackground,
    Image,
    TouchableOpacity,
    Animated,
} from 'react-native';
import { colors } from '../../utils/colors';
import { fonts, fontScale, windowWidth } from '../../utils/fonts';
import { color, asin } from 'react-native-reanimated';
import { getData, storeData } from '../../utils/localStorage';
import { PermissionsAndroid } from 'react-native';
import { MyButton } from '../../components';

export default function Beranda2({ navigation }) {
    return (
        <ImageBackground source={require('../../assets/back.png')} style={{
            flex: 1,
            padding: 10,
        }}>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1
            }}>

                <Image
                    source={require('../../assets/why.png')}
                    style={{
                        marginTop: '3%',
                        height: 150,
                        resizeMode: 'contain'
                    }}
                />



                <Text style={{
                    marginTop: 10,
                    fontFamily: fonts.secondary[600],
                    textAlign: 'center',
                    color: colors.white,
                    fontSize: windowWidth / 25,
                    maxWidth: '80%',
                    marginBottom: '1%'
                }}>Kompetensi ?
                </Text>

                <Text style={{
                    fontFamily: fonts.secondary[600],
                    textAlign: 'center',
                    color: colors.white,
                    fontSize: windowWidth / 25,
                    maxWidth: '80%',
                    marginBottom: '5%'
                }}>Setelah kamu menggunakan aplikasi ini, kamu diharapkan mampu mengetahui, memahami dan mempraktikkan konsep tentang surimi beserta turunannya (nugget ikan, bakso ikan, & sosis ikan).
                </Text>


                <Text style={{
                    fontFamily: fonts.secondary[600],
                    textAlign: 'center',
                    color: colors.white,
                    fontSize: windowWidth / 25,
                    maxWidth: '80%',
                }}>Menarik bukan?
                </Text>
                <Text style={{
                    fontFamily: fonts.secondary[600],
                    textAlign: 'center',
                    color: colors.white,
                    fontSize: windowWidth / 25,
                    maxWidth: '80%',
                }}>Yuk langsung saja masuk
                </Text>
                <Text style={{
                    fontFamily: fonts.secondary[600],
                    textAlign: 'center',
                    color: colors.white,
                    fontSize: windowWidth / 25,
                    maxWidth: '80%',
                    marginBottom: '5%'
                }}>ke halaman utama
                </Text>
                <TouchableOpacity style={{

                    backgroundColor: colors.primary,
                    padding: 10,
                    borderRadius: 10,
                }} onPress={() => navigation.navigate('Home')}>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        color: colors.white,
                    }}>Halaman Utama</Text>
                </TouchableOpacity>
            </View>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({})