import React, { FormEvent, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { LoginResponse, Logindto } from "../types/auth";
import { saveStateSesion, saveToLocalStorage } from "../utils/authUtils";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { logIn } from "../service/auth.service";
import { Paths } from "../path/paths";

const Login: React.FC = () => {
  const [formData, setFormData] = useState<Logindto>({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: async (data: Logindto) => await logIn(data),
    onSuccess: (response: LoginResponse) => {
      saveToLocalStorage(response.data, formData.email);
      saveStateSesion(true)
      navigate(Paths.home)
    },
    onError: () => {
      saveStateSesion(false)
      toast.error("Credenciales incorrectas");
    },
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    loginMutation.mutate(formData);
  };

  return (
    <div className="login-container d-flex justify-content-center align-items-center">
      <form onSubmit={handleSubmit} className="login-form">
        <h2 className="text-center mb-4">Iniciar Sesión</h2>
        <div className="form-group mb-3">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="password">Contraseña</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              id="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
            <span
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "👓" : "🕶️"}
            </span>
          </div>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default Login;
