import Toast from 'react-native-toast-message';
import {IRepository} from '../../../../models/githubAPIResponse';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface IRepositoryItemProps {
  full_name: string;
}

const RepositoryItem: React.FC<IRepositoryItemProps> = ({full_name}) => {
  const showToast = () => {
    Toast.show({
      text1: 'Repo Detayları',
      text2: full_name,
      position: 'bottom',
      type: 'info',
      visibilityTime: 3000,
    });
  };

  return (
    <TouchableOpacity style={styles.itemContainer} onPress={showToast}>
      <View style={styles.itemInnerView}>
        <Text style={styles.textColor}>{full_name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textColor: {color: 'black'},
  itemInnerView: {
    padding: 10,
    margin: 10,
    backgroundColor: 'white',
  },
  itemContainer: {backgroundColor: 'tomato'},
});

export default RepositoryItem;
