import React from "react";

export const UserCard = ({ email }) => {
    return (
        <div className="row mt-5">
            <div className="col-sm-3">
                <div className="card mt-5">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaEr2BdhKbghNC-HQ-sCxigv15Il0Bp0sK1g&usqp=CAU" className="rounded-circle position-absolute top-0 start-50 translate-middle" alt="..." style={{ width: "10em", height: "10em" }} />
                    <div className="card-body mt-5 pt-5">
                        <h5 className="card-title text-center">Nombre Usuario</h5>
                        <p className="card-text text-center">{email}</p>

                    </div>
                </div>
            </div>
            <div className="col-sm-9">
                <div className="card mt-5">
                    <div className="card-body">
                        <h5 className="card-title text-center">Descripcion</h5>
                        <p className="card-text text-center">Contenido Variado</p>

                    </div>
                </div>
            </div>
        </div>
    )
}