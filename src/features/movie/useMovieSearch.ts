import { useQuery } from 'react-query';
import { searchApi } from '../../apis/movieApi';
import { Movie, ListResponse } from '../../types';
import { AxiosError, AxiosResponse } from "axios";

const useMovieSearch = (query: string) => {
  const queryFn = () => searchApi(query);
  return useQuery<AxiosResponse<ListResponse<Movie>>, AxiosError>(['searchMovie', query], queryFn, { enabled: Boolean(query) })
}

export default useMovieSearch;
