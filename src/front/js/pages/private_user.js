import React from "react";
import { UserCard } from "../component/cards";

export const PrivateUserView = () => {
    return (
        <div className="container mt-3">
            <h3><span className="badge bg-info text-dark mb-2">Vista Privada del Usuario</span></h3>
            <UserCard />
        </div>
    )
}