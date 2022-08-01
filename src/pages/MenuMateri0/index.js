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

export default function MenuMateri0({ navigation }) {
    return (
        <ImageBackground style={{
            flex: 1,
        }}>
            <Image style={{
                flex: 1,
                width: windowWidth
            }} source={require('../../assets/materi0.png')} />
            <TouchableOpacity style={{
                position: 'absolute',
                bottom: 100,
                alignSelf: 'center',
                backgroundColor: colors.primary,
                padding: 10,
                borderRadius: 10,
            }} onPress={() => navigation.navigate('MenuMateri00')}>
                <Text style={{
                    fontFamily: fonts.secondary[600],
                    color: colors.white,
                }}>Selanjutnya</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({})