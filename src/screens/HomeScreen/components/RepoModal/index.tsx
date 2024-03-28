import {Modal, Text, TouchableOpacity, View} from 'react-native';
import {
  backgroundColorStyles,
  borderRadiusStyles,
  elevationStyles,
  flexStyles,
  fontStyles,
  heightStyles,
  marginStyles,
  paddingStyles,
  textColorStyles,
  widthStyles,
} from '../../../../shared/styles';
import {memo} from 'react';

const RepoModal: React.FC<{
  modalVisible: boolean;
  closeModal: () => void;
  name: string;
  description: string;
}> = memo(({modalVisible, closeModal, name, description}) => {
  return (
    <Modal
      testID="modal-container"
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={closeModal}>
      <View
        style={[
          flexStyles.flex,
          flexStyles.alignCenter,
          flexStyles.justifyCenter,
        ]}>
        <View
          style={[
            backgroundColorStyles.backgroundColor,
            paddingStyles.padding20,
            borderRadiusStyles.borderRadius,
            elevationStyles.elevation10,
            heightStyles.hAuto,
            widthStyles.w80,
          ]}>
          {(name || description) && (
            <View style={(flexStyles.flex, flexStyles.flexGrow)}>
              <KeyValue value={name} keyName="Ad:" />
              <KeyValue value={description} keyName="Tanım:" />
              <TouchableOpacity
                onPress={closeModal}
                style={marginStyles.marginTop10}>
                <Text style={textColorStyles.textColorPrimary}>Kapat</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
});

function KeyValue({value, keyName}: {value: string; keyName: string}) {
  return (
    <View style={[flexStyles.flexRow, flexStyles.flexWrap]}>
      <Text style={[textColorStyles.textColor, fontStyles.fontBold]}>
        {keyName}
      </Text>
      <Text style={marginStyles.marginStart5}>{value}</Text>
    </View>
  );
}
export default RepoModal;

