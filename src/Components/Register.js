import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./css/Register.css"

function Register() {
  
  const[usuario, setUsuario]=useState('');
  const[clave, setClave]=useState('');
  const[nombre, setNombre]=useState('');
  
  const handleClick=(e)=>{
    e.preventDefault()
    const user={usuario, clave, nombre}
    console.log(user);
    fetch("http://localhost:8080/usuarios/crear",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(user)
    }).then(()=>{
      console.log("Nuevo Usuario creado");
      alert("Usuario creado con exito");
    })
  }

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>REGISTRATE</h2>
        <p>Por favor ingresa tus datos</p>
        <form>
          <input type="nombre" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
          <input type="usuario" placeholder="Usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)}/>
          <input type="password" placeholder="Clave" value={clave} onChange={(e) => setClave(e.target.value)}/>
          <button type="submit" onClick={handleClick}>REGISTER</button>
        </form>
        <p>
          ¿Tienes una cuenta? <Link to="/" className="sign-in">Iniciar Sesion</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;