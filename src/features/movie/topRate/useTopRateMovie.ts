import { useQuery } from "react-query";
import { topRatedApi } from "../../../apis/movieApi";
import { AxiosError,AxiosResponse } from "axios";
import { ListResponse, MovieDetail } from "../../../types";

const useTopRateMovie = () =>{
    return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>('usePopularMovie', topRatedApi)
}

export default useTopRateMovie