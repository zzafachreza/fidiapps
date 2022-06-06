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

export default function MenuMateri4() {



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

                <__isiMenu judul="1.	Pengertian Sosis" isi="Sosis merupakan produk olahan berbahan baku daging giling yang bersifat kenyal dan berbentuk silinder dengan pembungkus khusus yang sering dikenal sebagai selongsong atau casing. Selama ini masyarakat luas mengenal sosis dengan bahan baku daging sapi atau daging ayam, saat ini sudah berkembang pesat sosis yang dibuat dari daging ikan. “Casing” yang digunakan sebagai pembungkus sosis, dapat diperoleh secara alami dari usus hewani (ikan, kambing dan domba) maupun dibuat secara sintetis (cellophan yang dilapisi campuran polimer vynil chlorida, vynil asetat, parafin, selulosa, serat maupun kolagen). Jenis “casing” yang digunakan dapat mempengaruhi mutu sosis yang dihasilkan." />

                <__isiMenu judul="2.	Bahan Dasar" isi="Semua jenis ikan dan hasil perikanan lainnya dapat digunakan sebagai bahan dasar untuk pembuataan sosis ikan yang tentunya daging ikan yang segar dan bermutu prima." />

                <__isiMenu judul="3.	Bahan Pengisi dan Pengikat" isi="Sosis dibuat menurut selera lokal, sehinga komposisi dan jenis bumbu yang digunakan bervariasi sesuai daerah masing-masing. Bahan pengisi adalah bahan makanan yang ditambahkan dalam pembuatan sosis, biasanya bahan sumber karbohidrat. Untuk memperkuat emulsi air dan lemak, dapat ditambahakan bahan pengikat seperti susu skim atau konsentrat protein kedelai." />

                <__isiMenu judul="4.	Penambahan bahan-bahan lainnya" isi="•	Penambahan air es atau serpihan es antara 16-25% dari berat daging dapat menghasilkan emulsi yang stabil.
•	Penambahan garam dapur dan garam polifosfat secara bersamaan dapat mempengaruhi pH, pengembangan adonan dan daya ikat air dari daging.
•	Penambahan bumbu untuk menambah dan meningkatan cita rasa yang diinginkan.
•	Penambahan zat warna dimaksudkan untuk mengembalikan warna daging seperti warna asalnya, menggunakan pewarna makanan.
•	Penambahan casing untuk membungkus produk sosis, serta menentukan bentuk dan ukuran produk sesuai keinginan. (Casing alami & Sintesis (dapat dimakan dan tidak dapat dimakan))
" />

                <__isiMenu judul="5. Alur Proses Pembuatan Sosis Ikan" isi="" />

                <Image source={require('../../assets/alur.png')} style={{
                    width: '100%',
                    resizeMode: 'contain'
                }} />



            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})