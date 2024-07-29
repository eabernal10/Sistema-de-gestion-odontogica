package com.prueba.prueba.modelo;

import java.sql.Date;
import java.util.List;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity
public class pacientes {
    
    @Id 
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int idpaciente;
    @Column(name="apellidos", length=45)
    private String apellidos;
    
    @Column(name="nombres", length=45)
    private String nombres;

    @Column(name="edad")
    private int edad;
    
    @Column(name="sexo", length=45)
    private String sexo;

    @Column(name="odontograma", length = 53)
    private String odontograma = "000000000000000000000000000000000000000000000000000" ;

    public String getOdontograma() {
        return odontograma;
    }

    public void setOdontograma(String odontograma) {
        this.odontograma = odontograma;
    }

    public pacientes(String apellidos, String nombres, int edad, String sexo) {
        this.apellidos = apellidos;
        this.nombres = nombres;
        this.edad = edad;
        this.sexo = sexo;
        this.odontograma="000000000000000000000000000000000000000000000000000";
    }

    public pacientes() {
            }
    
    /////////////////////////
 /*   @OneToMany(mappedBy="paciente", cascade = CascadeType.ALL)
     private List<tratamientos>  Tratamientos;*/
    


    /*public List<tratamientos> getTratamientos() {
        return Tratamientos;
    }

    public void setTratamientos(List<tratamientos> tratamientos) {
        Tratamientos = tratamientos;
    }*/

    /////////////////////////
    public int getIdpaciente() {
        return idpaciente;
    }
    public void setIdpaciente(int idpaciente) {
        this.idpaciente = idpaciente;
    }
    public String getApellidos() {
        return apellidos;
    }
    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }
    public String getNombres() {
        return nombres;
    }
    public void setNombres(String nombres) {
        this.nombres = nombres;
    }
    public int getEdad() {
        return edad;
    }
    public void setEdad(int edad) {
        this.edad = edad;
    }
    public String getSexo() {
        return sexo;
    }
    public void setSexo(String sexo) {
        this.sexo = sexo;
    }
    @Override
    public String toString() {
        return "pacientes [idpaciente=" + idpaciente + ", apellidos=" + apellidos + ", nombres=" + nombres
                + ", edad=" + edad + ", sexo=" + sexo + "]";
    }
    
    

    

    /*
     * CREATE TABLE `pacientes` (
  `idpaciente` int NOT NULL AUTO_INCREMENT,
  `apellidos` varchar(45) DEFAULT NULL,
  `nombres` varchar(45) DEFAULT NULL,
  `fechanacimiento` date DEFAULT NULL,
  `sexo` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idpaciente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

     */
}
