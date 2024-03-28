import '@testing-library/jest-native/extend-expect';
import { render } from '@testing-library/react-native';
import React from 'react';
import HomeListSkeleton from '..';

jest.mock('react-native-skeleton-placeholder', () => {
  const React = require('react');
  const {View} = require('react-native');

  return {
    __esModule: true,
    default: ({children}: {children: React.ReactNode}) => (
      <View testID="skeleton-placeholder">{children}</View>
    ),
  };
});

describe('HomeListSkeleton', () => {
  test('renders the correct number of skeleton items', () => {
    const {getAllByTestId} = render(<HomeListSkeleton />);
    const skeletonItems = getAllByTestId('skeleton-item');

    expect(skeletonItems.length).toBe(7);
  });

  test('applies correct styles to each skeleton item', () => {
    const {getAllByTestId} = render(<HomeListSkeleton />);
    const skeletonItems = getAllByTestId('skeleton-item');

    skeletonItems.forEach(item => {
      expect(item).toHaveStyle({
        margin: 10,
        padding: 10,
      });
    });
  });
});
