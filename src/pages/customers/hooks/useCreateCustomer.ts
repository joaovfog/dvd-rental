import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { axios } from "../../../lib/axios";

const createCustomer = async (data: any) => {
  const result = await axios.post(`customers`, data);
  return result;
};

export function useCreateCustomer() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation(createCustomer, {
    onSuccess: () => {
      queryClient.invalidateQueries("customers");
      toast.success("Cliente cadastrado com sucesso!");
      navigate("/customers");
    },
    onError: (error: unknown) => {
      console.log(error);
      toast.error("Não foi possível cadastrar cliente!");
    },
  });
}
