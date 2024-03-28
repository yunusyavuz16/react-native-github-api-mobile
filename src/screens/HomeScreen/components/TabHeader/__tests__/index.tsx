import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {LayoutOptionEnum} from '../../../models';
import '@testing-library/jest-native/extend-expect';
import TabHeader from '..';

describe('TabHeader', () => {
  const mockHandlePress = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders correctly with given layout', () => {
    const layout = LayoutOptionEnum.oneViewInRow;

    const {getByText} = render(
      <TabHeader handlePress={mockHandlePress} layout={layout} />,
    );

    expect(getByText(LayoutOptionEnum.oneViewInRow)).toBeTruthy();
    expect(getByText(LayoutOptionEnum.twoViewsInRow)).toBeTruthy();
    expect(getByText(LayoutOptionEnum.threeViewsInRow)).toBeTruthy();
  });

  test('calls handlePress with correct itemIdentifier when button is pressed', () => {
    const layout = LayoutOptionEnum.oneViewInRow;

    const {getByText} = render(
      <TabHeader handlePress={mockHandlePress} layout={layout} />,
    );

    fireEvent.press(getByText(LayoutOptionEnum.twoViewsInRow));
    expect(mockHandlePress).toHaveBeenCalledWith(
      LayoutOptionEnum.twoViewsInRow,
    );

    fireEvent.press(getByText(LayoutOptionEnum.threeViewsInRow));
    expect(mockHandlePress).toHaveBeenCalledWith(
      LayoutOptionEnum.threeViewsInRow,
    );
  });

  test('applies correct styles to the view container', () => {
    const layout = LayoutOptionEnum.threeViewsInRow;

    const {getByTestId} = render(
      <TabHeader handlePress={mockHandlePress} layout={layout} />,
    );

    const container = getByTestId('tab-header-container');
    expect(container).toHaveStyle({
      flexDirection: 'row',
      justifyContent: 'space-around',
      margin: 10,
      marginBottom: 20,
    });
  });
});
