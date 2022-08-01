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

export default function Beranda({ navigation }) {
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
                <Text style={{
                    fontFamily: fonts.secondary[600],
                    textAlign: 'center',
                    color: colors.white,
                    fontSize: windowWidth / 20,
                }}>Selamat Datang</Text>
                <Text style={{
                    fontFamily: fonts.secondary[600],
                    textAlign: 'center',
                    color: colors.white,
                    fontSize: windowWidth / 20,
                }}>Di Aplikasi</Text>
                <Text style={{
                    fontFamily: fonts.secondary[600],
                    textAlign: 'center',
                    color: colors.white,
                    fontSize: windowWidth / 20,
                }}>Fishery Diversification</Text>
                <Image
                    source={require('../../assets/hand.png')}
                    style={{
                        marginTop: '3%',
                        height: 150,
                        resizeMode: 'contain'
                    }}
                />



                <Text style={{
                    marginTop: 10,
                    fontFamily: fonts.secondary[400],
                    textAlign: 'center',
                    color: colors.white,
                    fontSize: windowWidth / 25,
                    maxWidth: '80%',
                    marginBottom: '5%'
                }}>FiDi Apps merupakan Aplikasi Pembelajaran Pengolahan Diversifikasi Hasil Perikanan yang membahas tentang proses pembuatan produk olahan perikanan surimi, nugget ikan, bakso ikan, dan sosis ikan yang disertai dengan video praktikum sehingga diharapkan dapat mempermudah pemahaman anda dalam memahami dan mengaplikasikan materi diversifikasi perikanan.
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Beranda2')}>
                    <Image source={require('../../assets/start.png')} style={{
                        width: 80,
                        height: 80,
                    }} />
                </TouchableOpacity>
            </View>
            <Image source={require('../../assets/org1.png')} style={{

                width: 100,
                height: 230,
                position: 'absolute',
                bottom: 0,
            }} />

        </ImageBackground>
    )
}

const styles = StyleSheet.create({})