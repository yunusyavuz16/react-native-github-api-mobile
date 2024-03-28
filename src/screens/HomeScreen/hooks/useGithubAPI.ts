import {useCallback, useEffect, useState} from 'react';
import {API_URL, API_URL_EXTENSION} from '../../../shared/envVariables';
import {IRepository} from '../../../shared/models/githubAPIResponse';
import checkNetwork from '../../../shared/utils/checkNetwork';

const useGithubAPI = () => {
  const [repositories, setRepositories] = useState<IRepository[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const [errorRepositories, setErrorRepositories] = useState<string | null>(
    null,
  );
  const [loadingRepositories, setLoadingRepositories] = useState<boolean>(true);

  useEffect(() => {
    const fetchGithubAPI = async () => {
      const check = await checkNetwork();
      if (!check) {
        setErrorRepositories('No internet connection.');
        setLoadingRepositories(false);
        return;
      }
      setLoadingRepositories(true);

      try {
        const url: string = API_URL + API_URL_EXTENSION;
        const newUrl = url
          .replace('{{pageNumber}}', pageNumber.toString())
          .replace('{{itemCount}}', '10');
        const response = await fetch(newUrl);
        const data = await response.json();
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

  const handleNextPage = useCallback(() => {
    setPageNumber(prev => prev + 1);
  }, []);

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
