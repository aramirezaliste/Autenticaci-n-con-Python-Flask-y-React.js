import React from "react";

export const SingUp = () => {

    return (

        <form className="container" onSubmit={(e) => {
            event.preventDefault()
            console.log(e.target[0].value)
            console.log(e.target[1].value)
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

    return (

        <form className="container" onSubmit={(e) => {
            event.preventDefault()
            console.log(e.target[0].value)
            console.log(e.target[1].value)
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
            <button className="btn btn-success" type="submit">Iniciar Sesion</button>
        </form>

    )
}