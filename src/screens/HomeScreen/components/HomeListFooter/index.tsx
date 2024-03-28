import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  backgroundColorStyles,
  borderRadiusStyles,
  borderStyles,
  flexStyles,
  fontStyles,
  marginStyles,
  paddingStyles,
  textColorStyles,
} from '../../../../shared/styles';

interface IFooterProps {
  pageNumber: number;
  handlePreviousPage: () => void;
  handleNextPage: () => void;
}

const Footer: React.FC<IFooterProps> = ({
  handleNextPage,
  handlePreviousPage,
  pageNumber,
}) => {
  return (
    <View
      style={[
        marginStyles.marginTop20,
        flexStyles.flexRow,
        flexStyles.justifySpaceBetween,
        flexStyles.alignCenter,
      ]}>
      <TouchableOpacity
        style={[
          paddingStyles.padding15,
          marginStyles.margin,
          borderStyles.borderPrimary,
          borderRadiusStyles.borderRadius,
        ]}
        disabled={pageNumber === 1}
        onPress={handlePreviousPage}>
        <Text style={textColorStyles.textColorPrimary}>Geri</Text>
      </TouchableOpacity>
      <Text style={[textColorStyles.textColor, fontStyles.fontBold]}>
        Sayfa: {pageNumber}
      </Text>
      <TouchableOpacity
        style={[
          paddingStyles.padding15,
          marginStyles.margin,
          borderRadiusStyles.borderRadius,
          backgroundColorStyles.backgroundPrimary,
        ]}
        onPress={handleNextPage}>
        <Text style={textColorStyles.textWhite}>İleri</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
