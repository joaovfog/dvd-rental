import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { useCreateRent } from "./hooks/useCreateRent";

export const CreateRent = () => {
  const { register, handleSubmit } = useForm();
  const { mutateAsync } = useCreateRent();

  const onSubmit = (data: any) => {
    const formData = {
      ...data,
      description: data?.description,
      date: data?.date,
      price: data?.price,
      customerEmail: data?.customerEmail,
    };

    mutateAsync(formData);
  };

  return (
    <div style={{ padding: 25 }}>
      <h2>Cadastro de Locação</h2>
      <Card style={{ width: 500 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div
            style={{ display: "flex", flexDirection: "column", padding: 20 }}
          >
            <TextField
              label="Nome do Filme"
              variant="outlined"
              {...register("description")}
              style={{ marginBottom: 20 }}
            />
            <TextField
              variant="outlined"
              type="date"
              {...register("date")}
              style={{ marginBottom: 20 }}
            />
            <TextField
              label="Preço"
              variant="outlined"
              {...register("price")}
              style={{ marginBottom: 20 }}
            />
            <TextField
              label="E-mail do Cliente"
              variant="outlined"
              {...register("customerEmail")}
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
              Locar
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};
