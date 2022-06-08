import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors, fonts, windowWidth } from '../../utils'
import { Icon } from 'react-native-elements'


export default function MenuLatihan({ navigation }) {
  return (
    <SafeAreaView style={{
      flex: 1,
      padding: 10,
      flexDirection: 'column',
      justifyContent: 'space-around'
    }}>

      <TouchableOpacity onPress={() => navigation.navigate('LatihanPre')} style={{
        justifyContent: 'center',
        backgroundColor: colors.primary,
        marginVertical: 10,
        flex: 1,
        alignItems: 'center'
      }}>
        <Icon type='ionicon' name="file-tray-stacked-outline" color={colors.white} size={windowWidth / 5} />
        <Text style={{
          marginTop: 10,
          fontFamily: fonts.secondary[600],
          color: colors.white,
          fontSize: windowWidth / 15
        }}>PRE TEST</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('LatihanPost')} style={{
        flex: 1,
        justifyContent: 'center',
        marginVertical: 10,
        alignItems: 'center',
        backgroundColor: colors.secondary,

      }}>
        <Icon type='ionicon' name="document-text-outline" color={colors.white} size={windowWidth / 5} />
        <Text style={{
          marginTop: 10,
          fontFamily: fonts.secondary[600],
          color: colors.white,
          fontSize: windowWidth / 15
        }}>POST TEST</Text>
      </TouchableOpacity>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})