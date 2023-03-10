import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const SingUp = () => {

    const { store, actions } = useContext(Context)

    return (

        <form className="container" onSubmit={(e) => {
            e.preventDefault()
            let email = e.target[0].value
            let password = e.target[1].value
            if (email == "" || password == "") {
                alert("Falta contraseña o Email")
            } else {
                actions.registro(email, password)
            }

        }}>
            <div className="mb-3 row">
                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control" id="staticEmail" placeholder="email@example.com" />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword" />
                </div>
            </div>
            <button className="btn btn-success" type="submit">Enviar registro</button>
        </form>

    )
}

export const Login = () => {

    const { store, actions } = useContext(Context)

    return (

        <form className="container" onSubmit={(e) => {
            e.preventDefault()
            let email = e.target[0].value
            let password = e.target[1].value
            if (email == "" || password == "") {
                alert("Falta contraseña o Email")
            } else {
                actions.getToken(email, password)
            }

        }}>
            <div className="mb-3 row">
                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control" id="staticEmail" placeholder="email@example.com" />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword" />
                </div>
            </div>
            <button className="btn btn-success" type="submit" >Iniciar Sesion</button>
        </form>

    )
}