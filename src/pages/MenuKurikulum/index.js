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

export default function MenuKurikulum({ navigation }) {
    return (
        <SafeAreaView style={{
            flex: 1,
            padding: 10,

            backgroundColor: colors.white
        }}>
            <View style={{
                // justifyContent: 'center',
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
                    color: colors.secondary,
                    margin: 10,
                }}>KURIKULUM</Text>

                <Text style={{
                    fontFamily: fonts.secondary[600],
                    textAlign: 'center',
                    fontSize: fontScale * 25,
                    maxWidth: '95%',
                    marginVertical: 20
                }}>Kurikulum yang digunakan adalah kurikulum 2013</Text>

                <Text style={{
                    fontFamily: fonts.secondary[400],
                    textAlign: 'center',
                    fontSize: fontScale * 25,
                    maxWidth: '95%',
                    marginVertical: 20
                }}>Kurikulum 2013 (K-13) adalah kurikulum yang berlaku dalam Sistem Pendidikan Indonesia. Kurikulum ini merupakan kurikulum tetap diterapkan oleh pemerintah untuk menggantikan Kurikulum-2006 (yang sering disebut sebagai Kurikulum Tingkat Satuan Pendidikan) yang telah berlaku selama kurang lebih 6 tahun. Kurikulum 2013 masuk dalam masa percobaannya pada tahun 2013 dengan menjadikan beberapa sekolah menjadi sekolah rintisan.</Text>


            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})