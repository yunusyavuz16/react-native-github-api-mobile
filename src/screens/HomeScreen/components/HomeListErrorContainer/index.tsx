import React from 'react';
import {Text, View} from 'react-native';
import {
  backgroundColorStyles,
  borderRadiusStyles,
  flexStyles,
  fontStyles,
  heightStyles,
  marginStyles,
  paddingStyles,
  textAlignStyles,
  textColorStyles,
  widthStyles,
} from '../../../../shared/styles';

const HomeListErrorContainer: React.FC<{
  error: string | undefined | null;
  children?: React.ReactNode;
}> = ({error, children}) => {
  return (
    <>
      {error ? (
        <View
          style={[
            flexStyles.flex,
            flexStyles.justifyCenter,
            backgroundColorStyles.backgroundColor,
            paddingStyles.padding20,
            flexStyles.alignCenter,
          ]}>
          <View
            style={[
              backgroundColorStyles.backgroundDanger,
              borderRadiusStyles.borderRadius25,
              flexStyles.justifyCenter,
              flexStyles.alignCenter,
              marginStyles.marginBottom20,
              widthStyles.width50px,
              heightStyles.h50px,
            ]}>
            <Text style={[fontStyles.font24, textColorStyles.textWhite]}>
              X
            </Text>
          </View>
          <Text
            style={[
              fontStyles.fontBold,
              fontStyles.font24,
              textColorStyles.textDanger,
              textAlignStyles.textAlignCenter,
              marginStyles.marginBottom20,
            ]}>
            Bir Hata Oluştu
          </Text>
          <Text
            style={[
              fontStyles.font18,
              textColorStyles.textDanger,
              textAlignStyles.textAlignCenter,
            ]}>
            {error}
          </Text>
        </View>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default HomeListErrorContainer;
