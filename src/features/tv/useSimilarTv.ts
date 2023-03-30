import { AxiosError ,AxiosResponse} from "axios";
import { useQuery } from "react-query";
import { ListResponse, TVDetail } from "../../types";
import { similarApi } from "../../apis/tvApi";

const useSimilarTv = (id:string) => {
    return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>(['SimilarTv', id], () => similarApi(id));
}

export default useSimilarTv