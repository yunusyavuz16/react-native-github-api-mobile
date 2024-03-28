import React from 'react';
import { Text, View } from 'react-native';
import {
  flexStyles,
  fontStyles,
  marginStyles,
  textColorStyles,
} from '../../../../shared/styles';
import HomeListButton from '../HomeListButton';

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
      <HomeListButton
        onPress={handlePreviousPage}
        label="Geri"
        isDisabled={pageNumber === 1}
        variant={pageNumber > 1 ? 'primary' : 'secondary'}
      />
      <Text style={[textColorStyles.textColor, fontStyles.fontBold]}>
        Sayfa: {pageNumber}
      </Text>
      <HomeListButton
        onPress={handleNextPage}
        label="İleri"
        variant="primary"
      />
    </View>
  );
};

export default Footer;
