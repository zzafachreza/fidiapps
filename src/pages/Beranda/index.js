import React, { useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    SafeAreaView,
    Image,
    Animated,
} from 'react-native';
import { colors } from '../../utils/colors';
import { fonts, fontScale } from '../../utils/fonts';
import { color, asin } from 'react-native-reanimated';
import { getData, storeData } from '../../utils/localStorage';
import { PermissionsAndroid } from 'react-native';
import { MyButton } from '../../components';

export default function Beranda({ navigation }) {
    return (
        <SafeAreaView style={{
            flex: 1,
            padding: 10,

            backgroundColor: colors.white
        }}>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1
            }}>
                <Image
                    source={require('../../assets/logo.png')}
                    style={{
                        height: 100,
                        aspectRatio: 1,
                    }}
                />
                <Text style={{
                    fontFamily: fonts.secondary[800],
                    textAlign: 'center',
                    fontSize: fontScale * 40,
                    margin: 10,
                }}>BERANDA</Text>

                <Text style={{
                    fontFamily: fonts.secondary[400],
                    textAlign: 'center',
                    fontSize: fontScale * 25,
                    maxWidth: '95%',
                    marginVertical: 20
                }}>Diversifikasi pengolahan hasil perikanan adalah suatu cara memproses bahan baku menjadi produk akhir yang memiliki jenis beraneka ragam sehingga memiliki added value/nilai tambah yang lebih sebagai upaya pemanfaatan bahan baku hasil panen yang berlebih sehingga memberikan manfaatan yang lebih besar.</Text>

                <Text style={{
                    fontFamily: fonts.secondary[400],
                    textAlign: 'center',
                    fontSize: fontScale * 25,
                    maxWidth: '95%'
                }}>FiDi Apps merupakan Aplikasi Pembelajaran Pengolahan Diversifikasi Hasil Perikanan yang membahas tentang proses pembuatan produk olahan perikanan surimi, nugget ikan, bakso ikan, dan sosis ikan yang disertai dengan video praktikum sehingga diharapkan dapat mempermudah pemahaman anda dalam memahami dan mengaplikasikan materi diversifikasi perikanan.
                </Text>
            </View>
            <MyButton onPress={() => navigation.navigate('Home')} Icons="home-outline" title="Halaman Utama" warna={colors.primary} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})