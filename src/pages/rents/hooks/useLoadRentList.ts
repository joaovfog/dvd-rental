import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { axios } from "../../../lib/axios";

const loadRents = (data: any): Promise<any> => {
  return axios.get("/rents", {
    params: {
      ...data,
    },
  });
};

export function useLoadRents(query: any) {
  return useQuery(["rents", query], () => loadRents(query), {
    keepPreviousData: true,
    onError: () =>
      toast.error("Não foi possível carregar a listagem de locações!", {
        toastId: "loadRents",
      }),
  });
}
