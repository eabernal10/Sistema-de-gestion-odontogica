package com.prueba.prueba.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.prueba.prueba.modelo.usuarios;
import com.prueba.prueba.repository.UsuariosRepository;


@RestController
public class UsuariosController {
    
    @Autowired
    UsuariosRepository usuariosRepository;
    
    @CrossOrigin
    @GetMapping("/usuarios")
    public List<usuarios> getAllUsuarios(){
        return usuariosRepository.findAll();    

    }

    @CrossOrigin
    @GetMapping("/usuarios/{id}")
    public usuarios getUsuario(@PathVariable int id) {
        usuarios u = usuariosRepository.findById(id).get();
        return u;
    }

    @CrossOrigin
    @PostMapping("/usuarios/crear")
    public String creaUsuario(@RequestBody usuarios nuevoUsuario) {
        String mensaje = "";
        try {
            usuarios u = usuariosRepository.save(nuevoUsuario);
            mensaje="Usuario creado";
        } catch (Exception e) {
            mensaje=e.getMessage();
        }
    
        return mensaje;
    }

    @CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
    @PostMapping("/usuarios/login")
    public ResponseEntity<Map<String, String>> login(@RequestBody usuarios loginRequest) {
        Optional<usuarios> userOptional = usuariosRepository.findByUsuario(loginRequest.getUsuario());
        
        if (userOptional.isPresent()) {
            usuarios user = userOptional.get();
            if (user.getClave().equals(loginRequest.getClave())) {
                Map<String, String> response = new HashMap<>();
                response.put("message", "Login exitoso");
                return ResponseEntity.ok(response);
            }
        }

        Map<String, String> response = new HashMap<>();
        response.put("message", "Usuario o contraseña incorrectos");
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
    }

}
