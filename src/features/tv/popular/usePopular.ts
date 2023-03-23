import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { onTheAirApi } from "../../../apis/tvApi";
import { popularApi } from "../../../apis/tvApi";
import { TVDetail, ListResponse } from "../../../types";


const usePopular = () => {
    return useQuery<AxiosResponse<ListResponse<TVDetail>>,AxiosError>('popular', popularApi)
}

export default usePopular;