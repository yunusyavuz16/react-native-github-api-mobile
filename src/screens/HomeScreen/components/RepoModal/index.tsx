import {
  Modal,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
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

const RepoModal: React.FC<{
  modalVisible: boolean;
  closeModal: () => void;
  name: string;
  description: string;
}> = ({modalVisible, closeModal, name, description}) => {
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
              <View style={[flexStyles.flexRow, flexStyles.flexWrap]}>
                <Text style={[textColorStyles.textColor, fontStyles.fontBold]}>
                  Ad:
                </Text>
                <Text style={marginStyles.marginStart5}>{name}</Text>
              </View>
              <View style={[flexStyles.flexRow, flexStyles.flexWrap]}>
                <Text style={[textColorStyles.textColor, fontStyles.fontBold]}>
                  Tanım:
                </Text>
                <Text style={marginStyles.marginStart5}>{description}</Text>
              </View>
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
};

export default RepoModal;
