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
} from 'react-native';
import { colors } from '../../utils/colors';
import { fonts, fontScale } from '../../utils/fonts';
import { color, asin } from 'react-native-reanimated';
import { getData, storeData } from '../../utils/localStorage';
import { PermissionsAndroid } from 'react-native';
import { MyButton } from '../../components';

export default function MenuMateri3() {



    const __isiMenu = ({ judul, isi }) => {
        return (
            <View>
                <Text style={{
                    fontFamily: fonts.secondary[400],
                    fontSize: fontScale * 20,
                    maxWidth: '95%',
                    marginVertical: 10,
                    padding: 10,
                    backgroundColor: colors.secondary,
                    color: colors.white
                }}>
                    {judul}
                </Text>

                <Text style={{
                    fontFamily: fonts.secondary[400],
                    fontSize: fontScale * 20,
                    maxWidth: '95%',
                }}>{isi}</Text>

            </View>

        )
    }

    return (
        <SafeAreaView style={{
            flex: 1,
            padding: 10,

            backgroundColor: colors.white
        }}>
            <ScrollView style={{
                // justifyContent: 'center',
                flex: 1
            }}>



                <__isiMenu judul="1.	Pengertian Bakso Ikan" isi="Pengertian bakso ikan berdasarkan SNI 7266: 2014 adalah produk olahan hasil perikanan yang menggunakan lumatan daging ikan atau surimi minimum 40% dicampur tepung, dan bahan-bahan lainya bila diperlukan, yang mengalami pembentukan dan pemasakan." />


                <__isiMenu judul="2.	Bahan Baku/Mentah" isi="Bahan baku yang digunakan untuk pembuatan bakso ikan, berasal dari ikan segar, ikan beku, tetelan ikan, lumatan ikan maupun surimi yang telah memenuhi persyaratan mutu, tidak berasal dari perairan yang tercemar, baik dari hasil penangkapan maupun budidaya" />


                <__isiMenu judul="3.	Bahan Pembantu dan Tambahan" isi="Penambahan bahan pembantu seperti tepung tapioka yang merupakan sumber pati. Produk bakso yang dapat menghasilka	n rasa lezat, tekstur bagus dan bermutu tinggi menggunakan jumlah tepung tapioka sekitar 10- 15% dari daging ikan. Bahan tambahan yang digunakan pada pembuatan bakso ikan terdiri dari garam, bawang merah, bawang putih, soda kue, gula, lada, telur dan air es atau es" />


                <__isiMenu judul="4.	Alur Proses Pengolahan Bakso Ikan" isi="" />

                <Image source={require('../../assets/alur.png')} style={{
                    width: '100%',
                    resizeMode: 'contain'
                }} />




            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})