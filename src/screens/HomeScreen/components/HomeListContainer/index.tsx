import React from 'react';
import {ScrollView} from 'react-native';
import {flexStyles} from '../../../../shared/styles';

interface IHomeListContainer {
  isHorizontalScrollable: boolean;
  children: React.ReactElement;
}

const HomeListContainer: React.FC<IHomeListContainer> = ({
  isHorizontalScrollable,
  children,
}) => {
  return (
    <>
      {isHorizontalScrollable ? (
        <ScrollView
          testID="home-list-container-scrollview"
          horizontal
          showsHorizontalScrollIndicator={false}
          directionalLockEnabled={true}
          alwaysBounceVertical={false}
          style={[flexStyles.flex]}>
          {children}
        </ScrollView>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default HomeListContainer;
