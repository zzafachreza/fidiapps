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

export default function MenuMateri1() {



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


                <__isiMenu judul="1. Pengertian surimi" isi="Dalam rangka diversifikasi produk olahan hasil perikanan, diperkenalkan “Produk Surimi”, sebagai salah satu pemanfaatan pasca panen hasil perikanan. Definisi surimi menurut SNI 01-2694-1992 adalah produk olahan hasil perikanan berupa lumatan daging ikan yang telah mengalami proses pencucian (leaching), pengurangan kandungan air, penambahan bahan tambahan, pengepakan, pembekuan dan penyimpanan beku. Pemilihan bahan baku untuk pembuatan surimi perlu memperhatikan beberapa hal seperti jenis ikan, kesegaran dan mutu ikan, hal ini dapat diketahui dengan cara mengamati penampilan fisik, mata, insang, tekstur dan baunya. Produk surimi ini kemudian dapat dibuat berbagai macam “fish jelly product” seperti nugget, bakso, sosis, mie, siomay, otak-otak, fish cake, kamaboko, fish burger, dan sebagainya, yang spesifiknya menuntut kelenturan (sponginess) yang merupakan kriteria utama produk tersebut." />

                <__isiMenu judul="2.	Bahan Baku/Mentah" isi="Idealnya surimi dibuat dari spesies ikan bernilai ekonomis rendah dan ikan-ikan yang sampai saat ini kurang dimanfaatkan atau yang biasa disebut ikan buangan dengan daging putih yang mempunyai kemampuan mengental sangat baik sehingga membentuk tekstur yang elastis, berasa baik, dan berpenampakan lebih putih, tapi masih mempunyai kesegaran tinggi dan tersedia sepanjang tahun." />
                <__isiMenu judul="3.	Bahan Pembantu dan Bahan Tambahan" isi="Bahan pembantu dan juga bahan tambahan yang digunakan dalam pengolahan surimi ini antara lain sebagai berikut (BPPMHP 1987) : air, es, garam, gula pasir, dan polyphosphate." />
                <__isiMenu judul="4.	Pengolahan Surimi" isi="Cara pengolahan surimi meliputi tahapan sebagai berikut (BPPMHP 1987) : 
1)	Bahan baku ikan segar 
2)	Penyiangan & Pencucian (Hasil yang didapat berupa potongan ikan tanpa kepala dan isi perut serta telah bebas dari kotoran, darah maupun lendir.)
3)	Pemisahan daging (untuk menghilangkan duri dan tulang ikan)
4)	Pelumeran/leaching (Perendaman dilakukan 3 kali dengan perbandingan air dan daging 5 : 1, untuk Menghilangkan garam-garam an-organik, Memperbaiki tekstur dan rupa produk, meningkatkan sifat hidrofilik daging ikan)
5)	Pengepresan (Untuk mengurangi kadar air dalam hancuran daging ikan)
6)	Pencampuran/mixing (penambahan 3% gula dan 0,2% polyphosphate, untuk mencegah terjadinya dehidrasi, dan kerusakan fisik pada tahap pembekuan)
7)	Pengemasan (Untuk Menghindari terjadinya kerugian akibat bereaksinya surimi dengan udara, dan untuk tujuan distribusi)
8)	Pembekuan (sampai suhu pusat surimi mencapai sekitar -20 C, pada suhu ini enzim & bakteri dapat terhambat aktifitasnya)
9)	Penyimpanan beku
" />



            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})