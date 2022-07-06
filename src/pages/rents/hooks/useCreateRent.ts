import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { axios } from "../../../lib/axios";

const createRent = async (data: any) => {
  const result = await axios.post(`rents`, data);
  return result;
};

export function useCreateRent() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation(createRent, {
    onSuccess: () => {
      queryClient.invalidateQueries("rents");
      toast.success("Locação realizada com sucesso!");
      navigate("/rents");
    },
    onError: (error: unknown) => {
      console.log(error);
      toast.error("Não foi possível realizar a locação!");
    },
  });
}
