import { useNavigate, Link } from "react-router-dom";
import React, {useState} from "react";
import "./css/Login.css"

function Login() {

    const [usuario, setUsuario] = useState('');
    const [clave, setClave] = useState('');
    const navigate = useNavigate();
  
    const handleClick = (e) => {
        e.preventDefault();
        const credentials = { usuario, clave };
    
        fetch("http://localhost:8080/usuarios/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credentials),
          credentials: 'include' // Incluye cookies en la solicitud
        })
        .then(response => {
          // Verifica si la respuesta es en formato JSON
          if (response.ok) {
            return response.json();
          } else {
            return response.text().then(text => {
              throw new Error(text);
            });
          }
        })
        .then(data => {
          if (data.message === "Login exitoso") {
            navigate("/listapacientes"); // Redirige a la página principal
          } else {
            alert("Credenciales incorrectas");
          }
        })
        .catch(error => {
          console.error("Error:", error);
          alert("Ocurrió un error al intentar iniciar sesión");
        });
      };
  
    return (
      <div className="login-container">
        <div className="login-box">
          <h2>INICIAR SESION</h2>
          <p>Por favor ingresa tu usuario y clave</p>
          <form>
            <input type="usuario" placeholder="Usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
            <input type="password" placeholder="Clave" value={clave} onChange={(e) => setClave(e.target.value)} />
            <button type="submit" onClick={handleClick}>LOGIN</button>
          </form>
          <p>
            ¿No tienes una cuenta?
            <Link to="/register" className="sign-up">
               Registrate
            </Link>
          </p>
        </div>
      </div>
    );
  }
  
  export default Login;
  