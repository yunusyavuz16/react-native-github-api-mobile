import {Text, TouchableOpacity, View} from 'react-native';
import {
  borderStyles,
  marginStyles,
  paddingStyles,
  textColorStyles,
} from '../../../../shared/styles';
import {memo} from 'react';

interface IRepositoryItemProps {
  full_name: string;
  width: number | undefined;
}

const RepositoryItem: React.FC<IRepositoryItemProps> = memo(
  ({full_name, width}) => {
    const showToast = () => {
      console.log('RepositoryItem');
    };

    return (
      <TouchableOpacity onPress={showToast}>
        <View
          style={[
            paddingStyles.padding20,
            marginStyles.marginHorizontal20,
            {width: width ? width * 9 : undefined},
            borderStyles.borderBottomSecondary,
          ]}>
          <Text style={textColorStyles.textColor}>{full_name}</Text>
        </View>
      </TouchableOpacity>
    );
  },
);

export default RepositoryItem;
