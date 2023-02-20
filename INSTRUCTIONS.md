Registro de usuario
Al principio de cada aplicación no hay usuario o tokens, asi que el primer paso que hace sentido es crear un registro de usuario.

El usuario navega a la ruta /signup.
La aplicación de React.js (probablemente usando la libreria React Router) deberá detectar la ruta /signup y realizará emparejado con el correspondiente componente de pagina de React.js, esta página se encargará de representar el HTML del registro.
El usuario escoge y escribe un correo electrónico, una contraseña y hace clic en enviar.
La página de React.js esta a la espera de el evento onSubmit, este al activarse la función handleSubmit obtiene el email y contraseña de la API del Backend con python y flask, probablemente usanto una petición POST /token con el email y contraseña en el body payload.
Inicio de sesión
Esta parte del proceso ocurre solo cuando los nuevos tokens fueron generados.

El usuario aterriza en la ruta miaplicacion.com/login.
La aplicación de React.js (probablemente usando la libreria React Router) deberá detectar la ruta /login y realizará un emparejado con el correspondiente componente de página de React.js, esta página se encargará de renderizar el formulario de inicio de sesión.
El usuario llena formulario de inicio de sesión y lo envía.
La página está esperando a que se active el evento de envío del formulario, y finalmente se activa porque el usuario envía el formulario.
La página ahora recopila la información del nombre de usuario y contraseña para subir (POST) la data a la API.
La API valida que nombre de usuario y contraseña sean correctos y regresa un objeto token.
El front-end de la aplicación guarda el token en el sessionStorage.
El front-end de la aplicación redirecciona a la ruta /private.
Cierre de sesión
Este proceso ocurre cuando el usuario desea cerrar la sesión.

Normalmente hay un botón para el cierre de sesión en algún lado de la aplicación.
El usuario presiona el botón y el controlador de eventos onClick es llamado.
El front-end de la aplicación elimina el token del sessionStorage.
El front-end de la aplicación redirige a la página de inicio (público).
Validación del Token
Cualquier usuario puede solo tipear /private para intentar visitar una página privada, por eso es que se necesita implementar una validación, para prevenir que usuarios anonimos vean el contenido de la página privada, y debemos redirigir al usuario a la ruta /login o a otra página publica. Asi es como usualmente es el proceso:

El usuario tipea cualquier URL privada, por ejemplo: myapplication.com/private
La aplicación de React.js (probablemente usando la libreria React Router) detectará la ruta /private y realizara un emparejado con el correspondiente componente de página de React.js que se encargará de renderizar el HTML.
Antes de renderizar el HTML -y solo porque esta es una ruta privada- el componente debe verificar que el sessionStorage contiene un token autenticado, normalmente esto se haria en el useEffect (component did mount) porque se quiere que se haga tan pronto la aplicación cargue.
Si el sessionStorage 👎 no tiene el token, el usuario actual no esta considerado como registrado y el componente debe redirigirlo a la vista del inicio de sesión.
Si el sessionStorage 👍 contiene el token, el actual usuario esta registrado exitosamente y el resto de la vista del componente /private es cargado.

