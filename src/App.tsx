import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./ScartyClub/layout/layout";
import { Paths } from "./path/paths";
import { Login } from "./auth/Login";

const queryClient = new QueryClient();
function App() {
  return <QueryClientProvider client={queryClient}>
    <Routes>
        <Route path={Paths.home} element={<Layout />}>
          <Route path={Paths.otros} element={<h1>otros</h1>} />
        </Route>
        <Route path={Paths.login} element={<Login/>}>

        </Route>
    </Routes>
  </QueryClientProvider>;
}

export default App;
