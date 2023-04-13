import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Splash,
  Home,
  Beranda,
  MenuKurikulum,
  MenuKompetensi,
  MenuMateri,
  MenuLatihan,
  MenuTentang,
  MenuCredit,
  MenuMateriVidio,
  MenuMateri1,
  MenuMateri2,
  MenuMateri3,
  MenuMateri4,
  LatihanPost,
  LatihanPre,
  Utama,
  Beranda2,
  MenuMateri0,
  MenuMateri00,
} from '../pages';
import { colors } from '../utils';

const Stack = createStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator initialRouteName='Splash'>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Utama"
        component={Utama}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="MenuMateri0"
        component={MenuMateri0}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MenuMateri00"
        component={MenuMateri00}
        options={{
          headerShown: false,
        }}
      />





      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Beranda"
        component={Beranda}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Beranda2"
        component={Beranda2}
        options={{
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="MenuKurikulum"
        component={MenuKurikulum}
        options={{
          headerShown: true,
          headerTitle: 'KURIKULUM',
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.primary,
          }
        }}
      />


      <Stack.Screen
        name="MenuKompetensi"
        component={MenuKompetensi}
        options={{
          headerShown: true,
          headerTintColor: colors.white,
          headerTitle: 'KOMPETENSI',
          headerStyle: {
            backgroundColor: colors.primary,
          }
        }}
      />


      <Stack.Screen
        name="MenuMateri"
        component={MenuMateri}
        options={{
          headerShown: true,
          headerTitle: 'MATERI',
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.primary,
          }
        }}
      />


      <Stack.Screen
        name="MenuLatihan"
        component={MenuLatihan}
        options={{
          headerShown: true,
          headerTitle: 'LATIHAN',
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.primary,
          }
        }}
      />


      <Stack.Screen
        name="LatihanPost"
        component={LatihanPost}
        options={{
          headerShown: true,
          headerTitle: 'POST TEST',
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.primary,
          }
        }}
      />

      <Stack.Screen
        name="LatihanPre"
        component={LatihanPre}
        options={{
          headerShown: true,
          headerTitle: 'PRE TEST',
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.primary,
          }
        }}
      />


      <Stack.Screen
        name="MenuTentang"
        component={MenuTentang}
        options={{
          headerShown: true,
          headerTitle: 'TENTANG',
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.primary,
          }
        }}
      />


      <Stack.Screen
        name="MenuCredit"
        component={MenuCredit}
        options={{
          headerShown: true,
          headerTitle: 'CREDIT APPS',
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.primary,
          }
        }}
      />


      <Stack.Screen
        name="MenuMateriVidio"
        component={MenuMateriVidio}
        options={{
          headerShown: true,
          headerTitle: 'MATERI VIDIO',
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.primary,
          }
        }}
      />



      <Stack.Screen
        name="MenuMateri1"
        component={MenuMateri1}
        options={{
          headerShown: true,
          headerTitle: 'MATERI SURIMI',
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.primary,
          }
        }}
      />

      <Stack.Screen
        name="MenuMateri2"
        component={MenuMateri2}
        options={{
          headerShown: true,
          headerTitle: 'MATERI NUGGET IKAN',
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.primary,
          }
        }}
      />

      <Stack.Screen
        name="MenuMateri3"
        component={MenuMateri3}
        options={{
          headerShown: true,
          headerTitle: 'MATERI BAKSO IKAN',
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.primary,
          }
        }}
      />



      <Stack.Screen
        name="MenuMateri4"
        component={MenuMateri4}
        options={{
          headerShown: true,
          headerTitle: 'MATERI SOSIS IKAN',
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.primary,
          }
        }}
      />







    </Stack.Navigator>
  );
}
