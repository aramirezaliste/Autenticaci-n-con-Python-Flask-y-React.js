import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Login } from "../component/form";

export const LoginView = () => {
    const navigate = useNavigate();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const checkUserToken = () => {
        const userToken = localStorage.getItem('user-token');

        if (!userToken || userToken === 'undefined') {
            setIsLoggedIn(false);

        } else {
            setIsLoggedIn(true);
            navigate('/user');
        }

    }

    useEffect(() => {
        checkUserToken();
    }, [isLoggedIn]);

    return (
        <div className="container mt-3 text-center">
            <h3><span className="badge bg-info text-dark mb-2">Inicio de Sesion</span></h3>
            <Login />
        </div>
    )
}