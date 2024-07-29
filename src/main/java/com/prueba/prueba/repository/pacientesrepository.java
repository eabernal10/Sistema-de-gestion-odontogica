package com.prueba.prueba.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.prueba.prueba.modelo.pacientes;

public interface pacientesrepository extends JpaRepository<pacientes, Integer> {
    
}
