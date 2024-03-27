import {Text, TouchableOpacity, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {
  borderStyles,
  marginStyles,
  paddingStyles,
  textColorStyles,
} from '../../../../shared/styles';

interface IRepositoryItemProps {
  full_name: string;
  width: number | undefined;
}

const RepositoryItem: React.FC<IRepositoryItemProps> = ({full_name, width}) => {
  const showToast = () => {
    showMessage({
      message: full_name,
      type: 'info',
    });
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
};

export default RepositoryItem;
