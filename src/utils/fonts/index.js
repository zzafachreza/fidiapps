import React, { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;
export const fontScale = Dimensions.get('window').fontScale;


export const fonts = {
  primary: {
    300: 'Poppins-Light',
    400: 'Poppins-Regular',
    600: 'Poppins-SemiBold',
    700: 'Poppins-Bold',
    800: 'Poppins-ExtraBold',
    900: 'Poppins-Black',
    normal: 'SpaceGrotesk-Bold',
  },
  secondary: {
    200: 'Montserrat-ExtraLight',
    300: 'quicksand-light',
    400: 'quicksand-regular',
    600: 'quicksand-bold',
    700: 'Montserrat-Bold',
    800: 'Montserrat-ExtraBold',
    900: 'Montserrat-Black',
    normal: 'Fonetis',
  },
};
