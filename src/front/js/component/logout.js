import React from "react";

export const LogOut = () => {

    function eraseLocalStorage() {
        localStorage.removeItem('keyName')
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