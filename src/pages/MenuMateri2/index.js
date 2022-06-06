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

export default function MenuMateri2() {



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


                <__isiMenu judul="1.	Pengertian Nugget" isi="Nugget ikan merupakan salah satu bentuk pengolahan yang menggunakan daging ikan sebagai bahan dasarnya dengan tambahan tepung tapioka dan bumbu, berbentuk bulat halus dengan tekstur kompak, elastis, dan kenyal." />

                <__isiMenu judul="2.	Bahan Baku/Mentah" isi="Bahan dasar yang digunakan pada pembuatan nugget ikan adalah daging ikan segar atau surimi." />

                <__isiMenu judul="3.	Bahan Pembantu dan Tambahan" isi="Bahan pembantu atau tambahan dalam pembuatan nugget berupa : tepung (tapioka, terigu, sagu, atau tepung aren), telur, margarine, bumbu-bumbu dan tepung maizena untuk bahan butter." />

                <__isiMenu judul="4.	Pengelolaan Nugget Ikan" isi="1)	Bahan Baku Ikan Segar
2)	Fillet Surimi 
3)	Pengadonan 
4)	Pelumatan 
5)	Pencetakan 
6)	Pengukusan 
7)	Pendinginan 
8)	Pemberian Butter dan Bread Crumb 
9)	Penggorangan 
10)	Pengemasan 
11)	Penyimpanan Beku
" />





            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})