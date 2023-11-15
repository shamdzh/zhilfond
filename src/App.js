import { QueryClient, QueryClientProvider } from "react-query";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { PagaMain } from "./pages/PageMain";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Header />
        <PagaMain />
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
