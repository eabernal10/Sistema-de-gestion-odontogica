package com.prueba.prueba.modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class usuarios {
    
    @Id 
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int idusuario;
    
    @Column(name="usuario", length=45)
    private String usuario;

    @Column(name="clave", length=45)
    private String clave;

    @Column(name="nombre", length=45)
    private String nombre;

    public usuarios(){
        
    }

    public usuarios(int idusuario, String usuario, String clave, String nombre) {
        this.idusuario = idusuario;
        this.usuario = usuario;
        this.clave = clave;
        this.nombre = nombre;
    }

    public int getIdusuario() {
        return idusuario;
    }

    public void setIdusuario(int idusuario) {
        this.idusuario = idusuario;
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getClave() {
        return clave;
    }

    public void setClave(String clave) {
        this.clave = clave;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    @Override
    public String toString() {
        return "usuarios [idusuario=" + idusuario + ", usuario=" + usuario + ", clave=" + clave + ", nombre=" + nombre
                + "]";
    }

}
