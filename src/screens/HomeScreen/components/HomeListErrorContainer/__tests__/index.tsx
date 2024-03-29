import React from 'react';
import {render} from '@testing-library/react-native';
import HomeListErrorContainer from '../';
import {Text} from 'react-native';

describe('HomeListErrorContainer', () => {
  test('renders error message correctly', () => {
    const errorMessage = 'Test error message';
    const {getByText} = render(<HomeListErrorContainer error={errorMessage} />);

    const errorText = getByText(errorMessage);
    expect(errorText).toBeDefined();
  });

  it('renders children when there is no error', () => {
    const {getByText} = render(
      <HomeListErrorContainer error={null}>
        <Text>Test child component</Text>
      </HomeListErrorContainer>,
    );

    const childText = getByText('Test child component');
    expect(childText).toBeDefined();
  });
});
