package com.prueba.prueba.modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class tipostratamiento {
    
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)   
    private int idtipostratamiento;
    

    private String tipo;

    public tipostratamiento() {
        
    }


    public tipostratamiento( String tipo) {
        this.tipo = tipo;
    }


    public int getIdtipostratamiento() {
        return idtipostratamiento;
    }


    public void setIdtipostratamiento(int idtipostratamiento) {
        this.idtipostratamiento = idtipostratamiento;
    }


    public String getTipo() {
        return tipo;
    }


    public void setTipo(String tipo) {
        this.tipo = tipo;
    }


    @Override
    public String toString() {
        return "tipostratamiento [idtipostratamiento=" + idtipostratamiento + ", tipo=" + tipo + "]";
    }

    


    /*
     * CREATE TABLE `tipostratamiento` (
  `idtipostratamiento` int NOT NULL AUTO_INCREMENT,
  `tipo` varchar(145) DEFAULT NULL,
  PRIMARY KEY (`idtipostratamiento`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

     * 
     */

}
