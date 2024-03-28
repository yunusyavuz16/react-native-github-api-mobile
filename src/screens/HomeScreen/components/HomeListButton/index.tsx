import {
  View,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import React from 'react';
import {LayoutOptionEnum} from '../../models';
import {
  backgroundColorStyles,
  borderRadiusStyles,
  borderStyles,
  paddingStyles,
  textColorStyles,
} from '../../../../shared/styles';

interface IHomeListButton {
  label: string;
  isDisabled?: boolean;
  variant:
    | 'primary'
    | 'secondary'
    | 'classic'
    | 'bordered-primary'
    | 'bordered-secondary';
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

// change style based on the variant

const HomeListButton: React.FC<IHomeListButton> = ({
  variant,
  label,
  onPress,
  isDisabled,
}) => {
  const getButtonStyle = () => {
    switch (variant) {
      case 'primary':
        return [backgroundColorStyles.backgroundPrimary];
      case 'secondary':
        return [backgroundColorStyles.backgroundSecondary];
      case 'classic':
        return [backgroundColorStyles.backgroundColor];
      case 'bordered-primary':
        return [
          backgroundColorStyles.backgroundColor,
          borderStyles.borderPrimary,
        ];
      case 'bordered-secondary':
        return [
          backgroundColorStyles.backgroundColor,
          borderStyles.borderSecondary,
        ];
      default:
        return [backgroundColorStyles.backgroundColor];
    }
  };

  const getTextColorStyle = () => {
    switch (variant) {
      case 'primary':
        return textColorStyles.textWhite;
      case 'secondary':
        return textColorStyles.textWhite;
      case 'classic':
        return textColorStyles.textColor;
      case 'bordered-primary':
        return textColorStyles.textWhite;
      case 'bordered-secondary':
        return textColorStyles.textColor;
      default:
        return textColorStyles.textColor;
    }
  };

  return (
    <TouchableOpacity
      disabled={isDisabled}
      style={[
        paddingStyles.padding,
        paddingStyles.paddingHorizontal20,
        borderRadiusStyles.borderRadius,
        ...getButtonStyle(),
      ]}
      onPress={onPress}>
      <Text style={getTextColorStyle()}>{label}</Text>
    </TouchableOpacity>
  );
};

export default HomeListButton;
