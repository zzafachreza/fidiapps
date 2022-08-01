import { Alert, StyleSheet, Text, View, Image, ImageBackground, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getData, storeData } from '../../utils/localStorage';
import { colors, fonts, windowHeight, windowWidth, } from '../../utils';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { showMessage } from 'react-native-flash-message';
import Sound from 'react-native-sound';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { MyButton } from '../../components';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';

export default function Home({ navigation }) {
  const isFocused = useIsFocused();
  const [user, setUser] = useState({});
  const [data, setData] = useState([]);
  // const [play, setPlay] = useState(false);


  useEffect(() => {
    if (isFocused) {

      getData('user').then(res => {
        setUser(res);

        axios.post('https://zavalabs.com/badig/data.php', {
          id_user: res.id
        }).then(res => {

          console.error('data server', res.data)
          setData(res.data)

        })


      })


    }
  }, [isFocused]);



  const DataKategori = ({
    icon,
    nama,
    nama2,
    onPress,
    warna = colors.primary,
  }) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: warna,
          padding: 5,
          borderRadius: 10,
          borderWidth: 5,
          borderColor: colors.secondary,
          width: windowWidth / 2.5,
          height: windowHeight / 5,
          elevation: 5,
          justifyContent: 'center',
        }}>
        <ImageBackground source={require('../../assets/back.png')} style={{
          flex: 1,
        }}>
          <View>
            <Icon
              type="ionicon"
              name={icon}
              color={colors.white}
              size={windowWidth / 5}
            />
          </View>
          <View>
            <Text
              style={{
                fontFamily: fonts.secondary[600],
                color: colors.white,
                fontSize: windowWidth / 30,
                textAlign: 'center',
              }}>
              {nama}
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{
      flex: 1,
      position: 'relative'
    }}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <View style={{
        backgroundColor: colors.primary,
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: 'row'
      }}>
        <View style={{
          flex: 2
        }}>
          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: windowWidth / 25,
            color: colors.white
          }}>Selamat datang,</Text>
          <Text style={{
            fontFamily: fonts.secondary[400],
            fontSize: windowWidth / 25,
            color: colors.white
          }}>di aplikasi FiDi (Fishery Diversification)</Text>

        </View>
        <Image
          source={require('../../assets/logo.png')}
          style={{
            height: 50,
            borderRadius: 5,
            width: 50,
          }}
        />



      </View>

      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around'
      }}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          margin: 10
        }}>
          <DataKategori onPress={() => navigation.navigate('MenuKurikulum')} nama="Kurikulum" icon="book-outline" nama2="Menu kurikulum" />
          <DataKategori onPress={() => navigation.navigate('MenuKompetensi')} nama="Kompetensi" icon="folder-open-outline" nama2="Menu Kompetensi" />
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          margin: 10
        }}>
          <DataKategori onPress={() => navigation.navigate('MenuMateri0')} nama="Materi" icon="library-outline" nama2="Menu Materi" />
          <DataKategori onPress={() => navigation.navigate('MenuLatihan')} nama="Latihan" icon="reader-outline" nama2="Menu Latihan" />
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          margin: 10
        }}>
          <DataKategori onPress={() => navigation.navigate('MenuTentang')} nama="Tentang" icon="information-circle-outline" nama2="Menu Tentang" />
          <DataKategori onPress={() => navigation.navigate('MenuCredit')} nama="Credit Apps" icon="shield-checkmark-outline" nama2="Menu Credit Apps" />
        </View>
      </View>



    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  judul: {
    fontFamily: fonts.secondary[600]
  }
})