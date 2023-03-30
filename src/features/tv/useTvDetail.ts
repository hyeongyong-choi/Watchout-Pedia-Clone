import { AxiosError, AxiosResponse } from 'axios';
import {useQuery} from 'react-query'
import { detailApi } from '../../apis/movieApi'
import { TVDetail } from '../../types';

const useTvDetail = (query: string) => {
    const queryFn = () => detailApi(query);

    return useQuery<AxiosResponse<TVDetail>, AxiosError>(['tvDetail', query], queryFn , {enabled:Boolean(queryFn)})
}

export default useTvDetail