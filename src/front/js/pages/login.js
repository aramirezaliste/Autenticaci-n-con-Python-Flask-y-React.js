import React from "react";
import { Login } from "../component/form";

export const LoginView = () => {

    return (
        <div className="container mt-3">
            <h3><span className="badge bg-info text-dark mb-2">Inicio de Sesion</span></h3>
            <Login />
        </div>
    )
}