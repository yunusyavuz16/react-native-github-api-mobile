import React from 'react';
import {View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {
  heightStyles,
  marginStyles,
  paddingStyles,
  widthStyles,
} from '../../../../shared/styles';

const HomeListSkeleton = () => {
  return (
    <SkeletonPlaceholder>
      <>
        {[1, 2, 3, 5, 6, 7, 8].map((_, index) => (
          <View
            testID="skeleton-item"
            key={index}
            style={[marginStyles.margin, paddingStyles.padding]}>
            <View
              style={[
                widthStyles.w200,
                heightStyles.h50,
                paddingStyles.padding20,
              ]}
            />
          </View>
        ))}
      </>
    </SkeletonPlaceholder>
  );
};

export default HomeListSkeleton;
