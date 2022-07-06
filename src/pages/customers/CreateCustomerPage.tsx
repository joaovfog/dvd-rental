import { Button, Card, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useCreateCustomer } from "./hooks/useCreateCustomer";

export const CreateCustomer = () => {
  const { register, handleSubmit } = useForm();
  const { mutateAsync } = useCreateCustomer();

  const onSubmit = (data: any) => {
    const formData = {
      ...data,
      name: data?.name,
      phone: data?.phone,
      email: data?.email,
      cpf: data?.cpf,
      address: data?.address,
    };

    mutateAsync(formData);
  };

  return (
    <div style={{ padding: 25 }}>
      <h2>Cadastro de Cliente</h2>
      <Card style={{ width: 500 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div
            style={{ display: "flex", flexDirection: "column", padding: 20 }}
          >
            <TextField
              label="Nome Completo"
              variant="outlined"
              {...register("name")}
              style={{ marginBottom: 20 }}
            />
            <TextField
              label="Telefone"
              variant="outlined"
              {...register("phone")}
              style={{ marginBottom: 20 }}
            />
            <TextField
              label="E-mail"
              variant="outlined"
              {...register("email")}
              style={{ marginBottom: 20 }}
            />
            <TextField
              label="CPF"
              variant="outlined"
              {...register("cpf")}
              style={{ marginBottom: 20 }}
            />
            <TextField
              label="Endereço"
              variant="outlined"
              {...register("address")}
              style={{ marginBottom: 20 }}
            />
            <button
              style={{
                borderRadius: 3,
                padding: 8,
                background: "#1976d2",
                border: "none",
                color: "white",
              }}
              type="submit"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};
