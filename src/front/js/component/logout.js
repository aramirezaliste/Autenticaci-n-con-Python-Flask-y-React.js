import React from "react";

export const LogOut = () => {

    function eraseLocalStorage() {
        localStorage.removeItem('user-token')
        localStorage.removeItem('jwt-token')
        localStorage.removeItem('user-email')
    };

    function redirectHome() {
        window.location.href = "/";
    };

    return (
        <button className="btn btn-danger" onClick={() => {
            eraseLocalStorage();
            redirectHome();
        }}><i className="fas fa-sign-out-alt"></i></button>
    )
}