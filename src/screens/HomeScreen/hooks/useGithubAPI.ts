import {useCallback, useEffect, useState} from 'react';
import {API_URL, API_URL_EXTENSION} from '../../../shared/envVariables';
import {IRepository} from '../../../shared/models/githubAPIResponse';
import checkNetwork from '../../../shared/utils/checkNetwork';
import store from '../../../redux/store';
import {useDispatch} from 'react-redux';
import {setRepositoriesRedux} from '../../../redux/reducers/repositoryReducer';

const useGithubAPI = () => {
  const [repositories, setRepositories] = useState<IRepository[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const dispatch = useDispatch();
  const [errorRepositories, setErrorRepositories] = useState<string | null>(
    null,
  );
  const [loadingRepositories, setLoadingRepositories] = useState<boolean>(true);

  useEffect(() => {
    const fetchGithubAPI = async () => {
      // get redux repositories state
      const reduxStories = store.getState().repositoryReducer.repositories as {
        [key: number]: IRepository[];
      };

      // check if the data is already in redux
      if (reduxStories[pageNumber]) {
        setRepositories(reduxStories[pageNumber]);
        return;
      }

      //  check network
      const check = await checkNetwork();
      if (!check) {
        setErrorRepositories('No internet connection.');
        setLoadingRepositories(false);
        return;
      }
      setLoadingRepositories(true);

      // api call
      try {
        // create url
        const url: string = API_URL + API_URL_EXTENSION;
        // replace pageNumber and itemCount
        const newUrl = url
          .replace('{{pageNumber}}', pageNumber.toString())
          .replace('{{itemCount}}', '10');
        const response = await fetch(newUrl);
        const data = await response.json();
        // set redux repositories state
        dispatch(setRepositoriesRedux({key: pageNumber, value: data}));
        setRepositories(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setErrorRepositories(error.message);
        } else {
          setErrorRepositories('An unknown error occurred.');
        }
      } finally {
        setLoadingRepositories(false);
      }
    };
    
    if (!pageNumber) return;
    fetchGithubAPI();
  }, [pageNumber]);

  // handle next page button
  const handleNextPage = useCallback(() => {
    setPageNumber(prev => prev + 1);
  }, []);

  // handle previous page button
  const handlePreviousPage = useCallback(() => {
    setPageNumber(prev => prev - 1);
  }, []);

  return {
    repositories,
    errorRepositories,
    loadingRepositories,
    handleNextPage,
    handlePreviousPage,
    pageNumber,
  };
};

export default useGithubAPI;
