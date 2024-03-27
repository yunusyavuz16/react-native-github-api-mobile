import {useEffect, useState} from 'react';
import {IRepository} from '../../../shared/models/githubAPIResponse';
import {API_URL} from '../../../shared/envVariables';

const API_URL_EX = '/repos?type=owner&page=1&per_page=10';

const useGithubAPI = () => {
  const [repositories, setRepositories] = useState<IRepository[]>([]);
  const [errorRepositories, setErrorRepositories] = useState<string | null>(
    null,
  );
  const [loadingRepositories, setLoadingRepositories] =
    useState<boolean>(false);

  const fetchGithubAPI = async () => {
    setLoadingRepositories(true);
    try {
      const response = await fetch(API_URL + API_URL_EX);
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

  useEffect(() => {
    fetchGithubAPI();
  }, []);

  return {repositories, errorRepositories, loadingRepositories};
};

export default useGithubAPI;
