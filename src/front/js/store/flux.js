
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			user: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			getToken: (email, contraseña) => {
				const Swal = require('sweetalert2')
				if (email && contraseña) {
					var myHeaders = new Headers();
					myHeaders.append("Content-Type", "application/json");

					var raw = JSON.stringify({
						"email": email,
						"password": contraseña
					});

					var requestOptions = {
						method: 'POST',
						headers: myHeaders,
						body: raw,
						redirect: 'follow'
					};

					fetch("https://3001-4geeksacade-reactflaskh-gncz9nkwcp6.ws-us87.gitpod.io/login", requestOptions)
						.then(response => response.json())
						.then(result => {
							console.log(result)
							if (!result.token) {
								Swal.fire({
									title: 'Error: usuario no registrado, email o password incorrectos',
									icon: 'error',
								})
							}
							else {
								Swal.fire({
									title: 'Ingreso completado',
									icon: 'success',
								})
								setStore({ user: result.email })
								localStorage.setItem('user-token', JSON.stringify(result.token));
								window.location.href = "/user";

							}
						})
						.catch(error => {
							console.log('error', error)
						});
				}

			},
			registro: (email, password) => {
				const Swal = require('sweetalert2')
				if (email && password) {
					var myHeaders = new Headers();
					myHeaders.append("Content-Type", "application/json");

					var raw = JSON.stringify({
						"email": email,
						"password": password
					});

					var requestOptions = {
						method: 'POST',
						headers: myHeaders,
						body: raw,
						redirect: 'follow'
					};

					fetch("https://3001-4geeksacade-reactflaskh-gncz9nkwcp6.ws-us87.gitpod.io/signup", requestOptions)
						.then(response => response.json())
						.then(result => {
							console.log(result)
							if (!result.email) {
								Swal.fire({
									title: 'Error: email o password incorrectos',
									icon: 'error',
								})
							}
							else {
								Swal.fire({
									title: 'Registro completado',
									icon: 'success',
								})
								window.location.href = "/login";

							}
						})
						.catch(error => console.log('error', error));
				}
			},




			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
