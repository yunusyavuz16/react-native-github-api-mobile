import React from 'react';
import {View} from 'react-native';
import {flexStyles, marginStyles} from '../../../../shared/styles';
import {LayoutOptionEnum} from '../../models';
import HomeListButton from '../HomeListButton';

interface ITabHeaderProps {
  handlePress: (itemIdentifier: LayoutOptionEnum) => () => void;
  layout: string;
}

const TabHeader: React.FC<ITabHeaderProps> = React.memo(
  ({handlePress, layout}) => {
    return (
      <View
        testID='tab-header-container'
        style={[
          flexStyles.flexRow,
          flexStyles.justifySpaceAround,
          marginStyles.margin,
        ]}>
        <HomeListButton
          label={LayoutOptionEnum.oneViewInRow}
          onPress={handlePress(LayoutOptionEnum.oneViewInRow)}
          variant={
            layout === LayoutOptionEnum.oneViewInRow ? 'primary' : 'classic'
          }
        />

        <HomeListButton
          label={LayoutOptionEnum.twoViewsInRow}
          onPress={handlePress(LayoutOptionEnum.twoViewsInRow)}
          variant={
            layout === LayoutOptionEnum.twoViewsInRow ? 'primary' : 'classic'
          }
        />

        <HomeListButton
          label={LayoutOptionEnum.threeViewsInRow}
          onPress={handlePress(LayoutOptionEnum.threeViewsInRow)}
          variant={
            layout === LayoutOptionEnum.threeViewsInRow ? 'primary' : 'classic'
          }
        />
      </View>
    );
  },
);

export default TabHeader;
