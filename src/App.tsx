import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";

import { QueryClientProvider } from "react-query";
import { queryClient } from "./lib/react-query";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
