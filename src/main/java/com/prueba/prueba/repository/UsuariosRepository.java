package com.prueba.prueba.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.prueba.prueba.modelo.usuarios;

public interface UsuariosRepository extends JpaRepository<usuarios, Integer>{
    Optional<usuarios> findByUsuario(String usuario);
    Optional<usuarios> findByClave(String clave);
}
