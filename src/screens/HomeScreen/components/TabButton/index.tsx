import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {LayoutOptionEnum} from '../../models';
import {
  backgroundColorStyles,
  borderRadiusStyles,
  paddingStyles,
  textColorStyles,
} from '../../../../shared/styles';

interface ITabButtonProps {
  setLayout: React.Dispatch<React.SetStateAction<LayoutOptionEnum>>;
  layout: LayoutOptionEnum;
  itemIdentifier: LayoutOptionEnum;
  label: string;
}

const TabButton: React.FC<ITabButtonProps> = ({
  setLayout,
  layout,
  itemIdentifier,
  label,
}) => {
  const handlePress = () => {
    setLayout(itemIdentifier);
  };

  // if selected background is primary
  return (
    <TouchableOpacity
      style={[
        paddingStyles.padding,
        itemIdentifier === layout
          ? backgroundColorStyles.backgroundPrimary
          : backgroundColorStyles.backgroundColor,
        borderRadiusStyles.borderRadius,
      ]}
      onPress={handlePress}>
      <Text
        style={
          layout === itemIdentifier
            ? textColorStyles.textWhite
            : textColorStyles.textColor
        }>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TabButton;
