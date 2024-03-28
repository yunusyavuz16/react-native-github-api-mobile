import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import RepoModal from '..';

describe('RepoModal', () => {
  test('should render modal when modalVisible is true', () => {
    const {getByTestId} = render(
      <RepoModal
        modalVisible={true}
        closeModal={() => {}}
        name="Test Repo"
        description="Test Description"
      />,
    );
    expect(getByTestId('modal-container')).toBeDefined();
  });

  test('should not render modal when modalVisible is false', () => {
    const {queryByTestId} = render(
      <RepoModal
        modalVisible={false}
        closeModal={() => {}}
        name="Test Repo"
        description="Test Description"
      />,
    );
    expect(queryByTestId('modal-container')).toBeNull();
  });

  test('should call closeModal when modal is requested to close', () => {
    const closeModal = jest.fn();
    const {getByTestId} = render(
      <RepoModal
        modalVisible={true}
        closeModal={closeModal}
        name="Test Repo"
        description="Test Description"
      />,
    );
    fireEvent(getByTestId('modal-container'), 'requestClose');
    expect(closeModal).toHaveBeenCalledTimes(1);
  });

  test('should render name and description text', () => {
    const {getByText} = render(
      <RepoModal
        modalVisible={true}
        closeModal={() => {}}
        name="Test Repo"
        description="Test Description"
      />,
    );
    expect(getByText('Test Repo')).toBeDefined();
    expect(getByText('Test Description')).toBeDefined();
  });

  test('should call closeModal when "Kapat" button is pressed', () => {
    const closeModal = jest.fn();
    const {getByText} = render(
      <RepoModal
        modalVisible={true}
        closeModal={closeModal}
        name="Test Repo"
        description="Test Description"
      />,
    );
    fireEvent.press(getByText('Kapat'));
    expect(closeModal).toHaveBeenCalledTimes(1);
  });
});
