import React from "react";
import { Link } from "react-router-dom";
import { LogOut } from "./logout";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<button className="btn btn-primary">Home</button>
				</Link>
				<div className="ml-auto">
					<Link to="/user">
						<button className="btn btn-primary">Usuario Privado</button>
					</Link>
				</div>
				<div className="ml-auto">
					<Link to="/login">
						<button className="btn btn-primary">Login</button>
					</Link>
				</div>
				<div className="ml-auto">
					<Link to="/singup">
						<button className="btn btn-primary">SingUp</button>
					</Link>
				</div>
				<div className="ml-auto">
					<LogOut />
				</div>
			</div>
		</nav>
	);
};
