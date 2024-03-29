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
        {/* length props olarak ihtiyaca bağlı olarak alınabilir */}
        {Array.from({length: 7}).map((_, index) => (
          // skeleton item
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
