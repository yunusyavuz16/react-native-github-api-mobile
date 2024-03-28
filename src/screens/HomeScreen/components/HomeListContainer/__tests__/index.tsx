import React from 'react';
import { render } from '@testing-library/react-native';
import { Text } from 'react-native';
import HomeListContainer from '..';

describe('HomeListContainer', () => {
  test('renders children with horizontal scroll', () => {
    const mockChild = <Text testID="mockChild">Child Component</Text>;
    const { getByTestId, queryByTestId } = render(
      <HomeListContainer isHorizontalScrollable={true}>
        {mockChild}
      </HomeListContainer>
    );

    const scrollView = getByTestId('home-list-container-scrollview');
    expect(scrollView.props.horizontal).toBe(true);

    const childComponent = getByTestId('mockChild');
    expect(childComponent).toBeTruthy();

    // Ensure no vertical scroll indicator is shown
    expect(queryByTestId('scroll-indicator-vertical')).toBeFalsy();
  });

  test('renders children without scroll', () => {
    const mockChild = <Text testID="mockChild">Child Component</Text>;
    const { getByTestId, queryByTestId } = render(
      <HomeListContainer isHorizontalScrollable={false}>
        {mockChild}
      </HomeListContainer>
    );

    const scrollView = queryByTestId('home-list-container-scrollview');
    expect(scrollView).toBeFalsy();

    const childComponent = getByTestId('mockChild');
    expect(childComponent).toBeTruthy();
  });
});
