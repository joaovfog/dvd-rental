import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";

import { QueryClientProvider } from "react-query";
import { queryClient } from "./lib/react-query";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
