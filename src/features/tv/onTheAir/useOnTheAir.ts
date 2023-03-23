import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { onTheAirApi } from "../../../apis/tvApi";
import { TVDetail, ListResponse } from "../../../types";


const useOnTheAirApi = () => {
    return useQuery<AxiosResponse<ListResponse<TVDetail>>,AxiosError>('onTheAir', onTheAirApi)
}

export default useOnTheAirApi;