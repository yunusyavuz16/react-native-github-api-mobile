import {Image, Text, TouchableOpacity, View} from 'react-native';
import {
  borderStyles,
  flexStyles,
  heightStyles,
  marginStyles,
  paddingStyles,
  textColorStyles,
  widthStyles,
} from '../../../../shared/styles';
import {memo} from 'react';

interface IRepositoryItemProps {
  name: string;
  width: number | undefined;
  handlePress: () => void;
}

const RepositoryItem: React.FC<IRepositoryItemProps> = memo(
  ({name, width, handlePress}) => {
    return (
      <TouchableOpacity onPress={handlePress}>
        <View
          testID="repository-item"
          style={[
            paddingStyles.padding,
            marginStyles.marginHorizontal20,
            {width: width ? width * 8 : undefined},
            borderStyles.borderBottomSecondary,
            flexStyles.flexRow,
            flexStyles.alignCenter,
            flexStyles.gap5,
          ]}>
          {/* repository image */}
          <View style={[heightStyles.h35px, widthStyles.w35px]}>
            <Image
              style={[heightStyles.h35px, widthStyles.w35px]}
              source={require('../../../../assets/pngs/repository.png')}
            />
          </View>
          <View>
            <Text style={[textColorStyles.textColor]}>{name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  },
);

export default RepositoryItem;
