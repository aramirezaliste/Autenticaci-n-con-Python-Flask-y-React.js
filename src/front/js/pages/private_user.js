import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserCard } from "../component/cards";
import { Context } from "../store/appContext";

export const PrivateUserView = () => {

    const navigate = useNavigate();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const checkUserToken = () => {
        const userToken = localStorage.getItem('user-token');

        if (!userToken || userToken === 'undefined') {
            setIsLoggedIn(false);
            return navigate('/login');
        }
        setIsLoggedIn(true);

    }

    useEffect(() => {
        checkUserToken();
    }, [isLoggedIn]);

    const userEmail = localStorage.getItem('user-email');

    return (
        <div className="container mt-3">
            <h3><span className="badge bg-info text-dark mb-2">Vista Privada del Usuario</span></h3>
            <UserCard email={userEmail} />
        </div>
    )
}