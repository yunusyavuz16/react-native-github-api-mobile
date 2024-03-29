import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import RepositoryItem from '..';
import '@testing-library/jest-native/extend-expect';

describe('RepositoryItem', () => {
  // Rendering Test
  test('renders correctly with given props', () => {
    const full_name = 'octocat/Hello-World';
    const width = 100;
    const handlePress = jest.fn();

    const {getByText, getByTestId} = render(
      <RepositoryItem
        full_name={full_name}
        width={width}
        handlePress={handlePress}
      />,
    );

    const repositoryItem = getByTestId('repository-item');
    expect(getByText(full_name)).toBeTruthy();
    expect(repositoryItem).toHaveStyle({width: width * 8});
  });

  // Touchable Behavior Test
  test('calls handlePress when pressed', () => {
    const handlePress = jest.fn(); // Mock press handler function

    const {getByTestId} = render(
      <RepositoryItem
        full_name="octocat/Hello-World"
        width={100}
        handlePress={handlePress}
      />,
    );

    const repositoryItem = getByTestId('repository-item');

    // Simulate press on the component
    fireEvent.press(repositoryItem);

    // Assert that handlePress is called
    expect(handlePress).toHaveBeenCalledTimes(1);
  });

  // Styling Test
  test('applies correct styles based on props', () => {
    const {getByTestId} = render(
      <RepositoryItem
        full_name="octocat/Hello-World"
        width={100}
        handlePress={() => {}}
      />,
    );

    const repositoryItem = getByTestId('repository-item');

    expect(repositoryItem).toHaveStyle({
      padding: 10,
      marginHorizontal: 20,
    });

    expect(repositoryItem).toHaveStyle({
      borderBottomColor: 'rgb(200,200,200)',
      borderBottomWidth: 0.75,
    });
  });
});
