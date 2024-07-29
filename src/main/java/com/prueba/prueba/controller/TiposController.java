package com.prueba.prueba.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.prueba.prueba.modelo.tipostratamiento;
import com.prueba.prueba.repository.TiposRepository;



@RestController
public class TiposController {

    @Autowired
    TiposRepository tr;

    @CrossOrigin
    @GetMapping("/tipos")
    public List<tipostratamiento> getAllTipos(){
        return tr.findAll();
    }

    @CrossOrigin
    @GetMapping("/tipos/{id}")
    public tipostratamiento getMethodName(@PathVariable int id) {
        tipostratamiento t=tr.findById(id).get();
        return t;
    }
    
}
