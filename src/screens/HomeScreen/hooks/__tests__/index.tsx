import { renderHook } from '@testing-library/react-hooks';
import useGithubAPI from '../useGithubAPI';

jest.mock('../../../../shared/utils/checkNetwork', () => ({
  __esModule: true,
  default: jest.fn(() => Promise.resolve(true)),
}));
jest.mock('../../../../redux/store', () => ({
  getState: jest.fn(() => ({
    repositoryReducer: {
      repositories: {},
    },
  })),
}));
jest.mock('../../../../redux/reducers/repositoryReducer', () => ({
  setRepositoriesRedux: jest.fn(),
}));
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(() => jest.fn()),
}));

describe('useGithubAPI', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should fetch data and update state correctly', async () => {
    const {result, waitForNextUpdate} = renderHook(() => useGithubAPI());

    // Initial state
    expect(result.current.errorRepositories).toBeNull();
    expect(result.current.loadingRepositories).toBe(true);
    expect(result.current.pageNumber).toBe(1);

    // Wait for initial fetch
    await waitForNextUpdate();

    // After fetch
    expect(result.current.errorRepositories).toBeNull();
    expect(result.current.loadingRepositories).toBe(false);
    expect(result.current.pageNumber).toBe(1);
  });

  test('should handle error when network is unavailable', async () => {
    jest.spyOn(global, 'fetch').mockRejectedValueOnce('Network error');

    const {result, waitForNextUpdate} = renderHook(() => useGithubAPI());

    await waitForNextUpdate();

    expect(result.current.errorRepositories).toBe('An unknown error occurred.');
    expect(result.current.loadingRepositories).toBe(false);
    expect(result.current.repositories).toEqual([]);
  });

  test('should handle API fetch error', async () => {
    jest
      .spyOn(global, 'fetch')
      .mockRejectedValueOnce(new Error('API fetch error'));

    const {result, waitForNextUpdate} = renderHook(() => useGithubAPI());

    await waitForNextUpdate();

    expect(result.current.errorRepositories).toBe('API fetch error');
    expect(result.current.loadingRepositories).toBe(false);
    expect(result.current.repositories).toEqual([]);
  });
});
