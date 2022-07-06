import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { axios } from "../../../lib/axios";

const loadCustomers = (data: any): Promise<any> => {
  return axios.get("/customers", {
    params: {
      ...data,
    },
  });
};

export function useLoadCustomers(query: any) {
  return useQuery(["customers", query], () => loadCustomers(query), {
    keepPreviousData: true,
    onError: () =>
      toast.error("Não foi possível carregar a listagem de clientes!", {
        toastId: "loadCustomers",
      }),
  });
}
