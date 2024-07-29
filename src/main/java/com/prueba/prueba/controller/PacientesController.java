package com.prueba.prueba.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.prueba.prueba.modelo.pacientes;
import com.prueba.prueba.modelo.tratamientos;
import com.prueba.prueba.repository.pacientesrepository;


@RestController
public class PacientesController {
     @Autowired
    pacientesrepository pacrep;

    

    @CrossOrigin
    @GetMapping("/pacientes")
    public List<pacientes> getAllPacientes(){
        return pacrep.findAll();    

    }
    @CrossOrigin
    @GetMapping("/pacientes/{id}")
    public pacientes getPaciente(@PathVariable int id) {
        pacientes p=pacrep.findById(id).get();
        return p;
    }
    
    @CrossOrigin
    @PostMapping("/pacientes/crear")
    public String creapaciente(@RequestBody pacientes nuevoPacientes) {
        String mensaje="";
        try {
            pacientes  p=pacrep.save(nuevoPacientes);
            mensaje="Paciente guardado";
        } catch (Exception e) {
            mensaje=e.getMessage();
        }
    
        return mensaje;
    }

    @CrossOrigin
    @PutMapping("/pacientes/{id}")
    public pacientes updatePaciente(@PathVariable int id, @RequestBody pacientes pacienteDetails) {
        pacientes paciente = pacrep.findById(id).orElse(null);
        if (paciente != null) {
            paciente.setApellidos(pacienteDetails.getApellidos());
            paciente.setNombres(pacienteDetails.getNombres());
            paciente.setEdad(pacienteDetails.getEdad());
            paciente.setSexo(pacienteDetails.getSexo());
            paciente.setOdontograma(pacienteDetails.getOdontograma());
            
            return pacrep.save(paciente);
        }
        return null;
    }
    
    
}
