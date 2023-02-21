import React from "react";
import { SingUp } from "../component/form";

export const SingUpView = () => {

    return (
        <div className="container mt-3 text-center">
            <h3><span className="badge bg-info text-dark mb-2">Formulario de Registro</span></h3>
            <SingUp />
        </div>
    )
}