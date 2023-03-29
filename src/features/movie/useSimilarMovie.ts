import { AxiosError ,AxiosResponse} from "axios";
import { useQuery } from "react-query";
import { ListResponse, MovieDetail } from "../../types";
import { similarApi } from "../../apis/movieApi";

const useSimilarMovie = (id:string) => {
    return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>(['movieSimilar', id], () => similarApi(id));
}

export default useSimilarMovie