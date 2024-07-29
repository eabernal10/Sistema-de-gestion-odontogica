package com.prueba.prueba.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.prueba.prueba.modelo.tratamientos;

public interface tratamientosRepository extends JpaRepository<tratamientos, Integer> {
    List<tratamientos> findByIdpaciente(Integer idpaciente);
}
