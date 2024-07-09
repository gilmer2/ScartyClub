import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./ScartyClub/layout/layout";
import { Paths } from "./path/paths";
import { Register } from "./auth/Register";
import { ProtectedRoute } from "./utils/utils";
import { getStateSesion } from "./utils/authUtils";
import Login from "./auth/Login";
import { ToastContainer } from "react-toastify";
import { Product } from "./ScartyClub/product/Product";
import { useState } from "react";

const queryClient = new QueryClient();
// const stateSection = getStateSesion() ?? "false";
// const station = stateSection === "true" ? true : false;
function App() {
  const [state, setState] = useState<string | null>(getStateSesion());
  const station = state === "true" ? true : false;
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <Routes>
        <Route
          element={
            <ProtectedRoute
              canActivate={station}
              state={false}
              redirectPath={Paths.login}
            />
          }
        >
          <Route path={Paths.home} element={<Layout />}>
            <Route
              path={Paths.home}
              element={<Navigate to={Paths.product} replace />}
            />
            <Route path={Paths.product} element={<Product />} />
            <Route path={Paths.otros} element={<h1>otros</h1>} />
            
          </Route>
          
        </Route>
        <Route
          element={
            <ProtectedRoute
              canActivate={station}
              state={true}
              redirectPath={Paths.home}
            />
          }
        >
          <Route path={Paths.login} element={<Login />}></Route>
        </Route>
        <Route path={Paths.register} element={<Register />}></Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
