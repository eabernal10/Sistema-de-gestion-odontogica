package com.prueba.prueba.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.prueba.prueba.modelo.pacientes;
import com.prueba.prueba.modelo.tratamientos;
import com.prueba.prueba.repository.pacientesrepository;
import com.prueba.prueba.repository.tratamientosRepository;


@RestController
public class tratamientosController {
   
     @Autowired
    tratamientosRepository tratrep;

    
    @CrossOrigin
    @GetMapping("/tratamientos/{id}")
    public List<tratamientos> getAllTratamientos(@PathVariable int id){
        return tratrep.findByIdpaciente(id);    

    }

    @CrossOrigin
    @PostMapping("/tratamientos/crear")
    public String creatratamiento(@RequestBody tratamientos nuevotratamiento) {
        String mensaje="";
        try {
            tratamientos  p=tratrep.save(nuevotratamiento);
            mensaje="Tratamiento creado";
        } catch (Exception e) {
            mensaje=e.getMessage();
        }
    
        return mensaje;
    }

    @CrossOrigin
    @DeleteMapping("/tratamientos/{id}")
    public void deleteTratamiento(@PathVariable Integer id) {
        tratrep.deleteById(id);
    }
   
}