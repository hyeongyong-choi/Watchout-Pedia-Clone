import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { topRatedApi } from "../../../apis/tvApi";
import { popularApi } from "../../../apis/tvApi";
import { TVDetail, ListResponse } from "../../../types";


const useTopRate = () => {
    return useQuery<AxiosResponse<ListResponse<TVDetail>>,AxiosError>('topRatedApi', topRatedApi)
}

export default useTopRate;